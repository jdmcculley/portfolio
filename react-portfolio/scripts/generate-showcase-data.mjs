import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from "fs";
import { join, extname, basename } from "path";

const PROJECTS_DIR = join(process.cwd(), "public", "projects");
const OUTPUT_FILE = join(process.cwd(), "src", "data", "showcase-data.ts");
const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function folderToTitle(str) {
  if (str.includes(" ") || str !== str.toLowerCase()) return str;
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function toSlug(str) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function encodePath(segments) {
  return segments.map((s) => encodeURIComponent(s)).join("/");
}

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function filenameToAlt(filename) {
  const name = basename(filename, extname(filename));
  return name.replace(/^\d+[-_]/, "").replace(/[-_]/g, " ");
}

function discoverProjects() {
  if (!existsSync(PROJECTS_DIR)) {
    console.warn("No public/projects/ directory found — generating empty data.");
    return [];
  }

  const projectDirs = readdirSync(PROJECTS_DIR).filter((name) => {
    const full = join(PROJECTS_DIR, name);
    return statSync(full).isDirectory() && !name.startsWith(".");
  });

  return projectDirs.map((dirName) => {
    const projectPath = join(PROJECTS_DIR, dirName);
    const configPath = join(projectPath, "project.json");

    let config = {};
    if (existsSync(configPath)) {
      config = JSON.parse(readFileSync(configPath, "utf-8"));
    }

    const flowsDir = join(projectPath, "flows");
    const flows = [];

    if (existsSync(flowsDir)) {
      const flowDirs = readdirSync(flowsDir)
        .filter((name) => {
          const full = join(flowsDir, name);
          return statSync(full).isDirectory() && !name.startsWith(".");
        })
        .sort(naturalSort);

      for (const flowDirName of flowDirs) {
        const flowPath = join(flowsDir, flowDirName);
        const images = readdirSync(flowPath)
          .filter((f) => IMAGE_EXTS.has(extname(f).toLowerCase()))
          .sort(naturalSort);

        if (images.length === 0) continue;

        const flowConfig = config.flows?.[flowDirName] || {};
        const slug = toSlug(flowDirName);

        const screens = images.map((img, idx) => ({
          id: `${slug}-${idx + 1}`,
          src: `/${encodePath(["projects", dirName, "flows", flowDirName, img])}`,
          alt: filenameToAlt(img),
        }));

        flows.push({
          id: slug,
          title: flowConfig.title || folderToTitle(flowDirName),
          category: flowConfig.category || "Uncategorized",
          screenCount: screens.length,
          screens,
          thumbnail: screens[0].src,
        });
      }
    }

    return {
      id: dirName,
      name: config.name || folderToTitle(dirName),
      platform: config.platform || "",
      rating: config.rating || "",
      category: config.category || "",
      subtitle: config.subtitle || "",
      description: config.description || "",
      flows,
    };
  });
}

function generate() {
  const projects = discoverProjects();

  const firstProject = projects[0] || {
    id: "empty",
    name: "No Project",
    platform: "",
    rating: "",
    category: "",
    subtitle: "",
    description: "",
    flows: [],
  };

  const output = `// AUTO-GENERATED — do not edit. Run \`node scripts/generate-showcase-data.mjs\` to regenerate.
import { Project } from "@/types/showcase";

export const projectData: Project = ${JSON.stringify(firstProject, null, 2)};

export const allProjects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

  writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(
    `Generated ${OUTPUT_FILE} — ${projects.length} project(s), ${firstProject.flows.length} flow(s), ${firstProject.flows.reduce((a, f) => a + f.screenCount, 0)} screen(s)`
  );
}

generate();
