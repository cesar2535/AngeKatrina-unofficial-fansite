import { omataseMattaContent } from "./omataseMattaSetting";

interface AnimationProps {
  duration_ms: number;
  delay_ms: number;
}

// summmonText
export const summonTextShadowOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms: 0,
};

// magicCircle
export const magicCircleDropShadowOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms: 100,
};

export const magicCircleRemoveDropShadowOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms:
    magicCircleDropShadowOrder.duration_ms +
    magicCircleDropShadowOrder.delay_ms +
    150,
};

export const magicCricleFadeoutOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms:
    magicCircleDropShadowOrder.duration_ms +
    magicCircleDropShadowOrder.delay_ms,
};

export const magicCircleExpandOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms:
    magicCircleRemoveDropShadowOrder.duration_ms +
    magicCircleRemoveDropShadowOrder.delay_ms +
    550,
};

// blackCircle
export const blackCircleExpandOrder: AnimationProps = {
  duration_ms: 600,
  delay_ms:
    magicCircleExpandOrder.duration_ms + magicCircleExpandOrder.delay_ms + 500,
};

// angeTriangle
export const angeTriangleFadeinOrder: AnimationProps = {
  duration_ms: 600,
  delay_ms:
    blackCircleExpandOrder.duration_ms + blackCircleExpandOrder.delay_ms,
};

export const angeTriangleDropShadowOrder: AnimationProps = {
  duration_ms: 600,
  delay_ms:
    blackCircleExpandOrder.duration_ms + blackCircleExpandOrder.delay_ms,
};

export const angeTriangleRemoveDropShadowOrder: AnimationProps = {
  duration_ms: 1000,
  delay_ms:
    angeTriangleDropShadowOrder.duration_ms +
    angeTriangleDropShadowOrder.delay_ms,
};

export const angeTriangleMoveUpOrder: AnimationProps = {
  duration_ms: 800,
  delay_ms:
    angeTriangleRemoveDropShadowOrder.duration_ms +
    angeTriangleRemoveDropShadowOrder.delay_ms +
    100,
};

const omataseMattaFadeinDuration_ms = 150;

export const angeTriangleMoveDownOrder: AnimationProps = {
  duration_ms: omataseMattaFadeinDuration_ms * omataseMattaContent.length,
  delay_ms:
    angeTriangleMoveUpOrder.duration_ms +
    angeTriangleMoveUpOrder.delay_ms +
    300,
};

export const angeTriangleUpRotateOrder: AnimationProps = {
  duration_ms: angeTriangleMoveUpOrder.duration_ms,
  delay_ms: angeTriangleMoveUpOrder.delay_ms,
};

export const angeTriangleDownRotateOrder: AnimationProps = {
  duration_ms: angeTriangleMoveDownOrder.duration_ms,
  delay_ms: angeTriangleMoveDownOrder.delay_ms,
};

// omataseMattaText
export const omataseMattaFadeinOrder: AnimationProps = {
  duration_ms: omataseMattaFadeinDuration_ms,
  delay_ms: angeTriangleMoveDownOrder.delay_ms + 100,
};