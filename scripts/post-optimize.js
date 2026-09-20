#!/usr/bin/env node

/**
 * Post-build optimization script
 *
 * Copies the optimization manifest and optimized images
 * to the output directory for static export.
 */

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = process.cwd();

const manifestSource = path.join(
  PROJECT_ROOT,
  "public",
  "optimized-images.json"
);

const outDir = path.join(
  PROJECT_ROOT,
  "out"
);

const manifestDest = path.join(
  outDir,
  "optimized-images.json"
);

const imagesSrc = path.join(
  PROJECT_ROOT,
  "public",
  "images",
  "optimized"
);

const imagesDest = path.join(
  outDir,
  "images",
  "optimized"
);

// =====================================================
// Ensure output directory exists
// =====================================================

try {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, {
      recursive: true,
    });
  }
} catch (err) {
  console.error(
    "❌ Could not create output directory:",
    err instanceof Error ? err.message : err
  );

  process.exit(1);
}

// =====================================================
// Copy optimization manifest
// =====================================================

try {
  if (fs.existsSync(manifestSource)) {
    fs.copyFileSync(
      manifestSource,
      manifestDest
    );

    console.log(
      "✅ Copied optimization manifest to static export"
    );
  } else {
    console.log(
      "ℹ️ No optimization manifest found."
    );
  }
} catch (err) {
  console.warn(
    "⚠️ Could not copy optimization manifest:",
    err instanceof Error ? err.message : err
  );

  // Do not fail the build.
}

// =====================================================
// Recursively copy optimized images
// =====================================================

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, {
      recursive: true,
    });
  }

  const entries = fs.readdirSync(
    src,
    {
      withFileTypes: true,
    }
  );

  for (const entry of entries) {
    const srcPath = path.join(
      src,
      entry.name
    );

    const destPath = path.join(
      dest,
      entry.name
    );

    if (entry.isDirectory()) {
      copyDirRecursive(
        srcPath,
        destPath
      );
    } else if (entry.isFile()) {
      fs.copyFileSync(
        srcPath,
        destPath
      );
    }
  }
}

try {
  if (fs.existsSync(imagesSrc)) {
    copyDirRecursive(
      imagesSrc,
      imagesDest
    );

    console.log(
      "✅ Copied optimized images to static export"
    );
  } else {
    console.log(
      "ℹ️ No optimized images directory found."
    );
  }
} catch (err) {
  console.warn(
    "⚠️ Could not copy all optimized images:",
    err instanceof Error ? err.message : err
  );

  // Do not fail the build.
}

console.log(
  "✅ Post-build image optimization completed"
);