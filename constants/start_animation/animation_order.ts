// summmonText
export const summonTextShadowOrder = {
  duration: 500,
  delay: 0,
};

// magicCircle
export const magicCircleDropShadowOrder = {
  duration: 500,
  delay: 100,
};

export const magicCircleRemoveDropShadowOrder = {
  duration: 500,
  delay:
    magicCircleDropShadowOrder.duration +
    magicCircleDropShadowOrder.delay +
    150,
};

export const magicCricleFadeoutOrder = {
  duration: 500,
  delay: magicCircleDropShadowOrder.duration + magicCircleDropShadowOrder.delay,
};

export const magicCircleExpandOrder = {
  duration: 500,
  delay:
    magicCircleRemoveDropShadowOrder.duration +
    magicCircleRemoveDropShadowOrder.delay +
    550,
};

// blackCircle
export const blackCircleExpand = {
  duration: 600,
  delay: magicCircleExpandOrder.duration + magicCircleExpandOrder.delay + 500,
};

// angeTriangle
export const angeTriangleFadein = {
  duration: 600,
  delay: blackCircleExpand.duration + blackCircleExpand.delay,
};

export const angeTriangleDropShadow = {
  duration: 600,
  delay: blackCircleExpand.duration + blackCircleExpand.delay,
};

export const angeTriangleRemoveDropShadow = {
  duration: 1000,
  delay: angeTriangleDropShadow.duration + angeTriangleDropShadow.delay,
};

export const angeTriangleUpLocationOrder = {
  duration: 200,
  delay:
    angeTriangleRemoveDropShadow.duration +
    angeTriangleRemoveDropShadow.delay +
    100,
};

// omataseMattaText
export const omataseMattaFadeinOrder = {
  duration: 180,
  delay:
    angeTriangleRemoveDropShadow.duration +
    angeTriangleRemoveDropShadow.delay +
    100,
};
