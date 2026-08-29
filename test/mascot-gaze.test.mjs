import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { gazeFromPointer } from "../lib/mascot-gaze.ts";
import {
  CLOUD_BODY_PATH,
  CLOUD_BODY_FILL,
  CLOUD_BODY_SCALE,
  CLOUD_EYE_HEIGHT,
  CLOUD_EYE_POSITIONS,
  CLOUD_EYE_WIDTH,
} from "../lib/mascot-shape.ts";
import { siteConfig } from "../lib/site.ts";

const box = { left: 100, top: 50, width: 400, height: 400 };

test("keeps the mascot gaze centered when the pointer is over its center", () => {
  assert.deepEqual(gazeFromPointer({ x: 300, y: 250 }, box), {
    x: 0,
    y: 0,
    rotate: 0,
  });
});

test("maps pointer distance into a clamped gaze target", () => {
  assert.deepEqual(gazeFromPointer({ x: 900, y: -400 }, box), {
    x: 18,
    y: -18,
    rotate: 4,
  });
});

test("uses the mascot bounds safely when they have no size", () => {
  assert.deepEqual(
    gazeFromPointer({ x: 900, y: 900 }, { left: 0, top: 0, width: 0, height: 0 }),
    {
      x: 18,
      y: 18,
      rotate: 4,
    },
  );
});

test("the mascot uses the source-informed cloud silhouette and capsule eyes", () => {
  assert.match(CLOUD_BODY_PATH, /^M/);
  assert.match(CLOUD_BODY_PATH, /C/);
  assert.ok(CLOUD_BODY_PATH.length > 1000);
  assert.equal(CLOUD_BODY_FILL, "var(--red-active)");
  assert.equal(CLOUD_BODY_SCALE, 1.58);
  assert.equal(CLOUD_EYE_WIDTH, 24);
  assert.equal(CLOUD_EYE_HEIGHT, 40);
  assert.deepEqual(CLOUD_EYE_POSITIONS, [
    { x: 167, y: 184, rotation: -7 },
    { x: 233, y: 184, rotation: 7 },
  ]);
});

test("the site typography assigns Momo to headings and Outfit to everything else", async () => {
  const [layout, styles] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Momo_Trust_Display/);
  assert.match(layout, /Outfit/);
  assert.match(styles, /--font-sans:\s*var\(--font-outfit\)/);
  assert.match(styles, /--font-display:\s*var\(--font-momo-trust-display\)/);
  assert.match(styles, /h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6\s*\{/s);
  assert.doesNotMatch(styles, /font-family:\s*"Pirso"/);
});

test("uses the lowercase brand name", () => {
  assert.equal(siteConfig.name, "devstackedmagazine");
});
