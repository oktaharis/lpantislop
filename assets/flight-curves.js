/* Per scene and connector: how many frames its sequence has (assets/seq/<name>), and its
   scroll weight (relative camera motion, so busier clips get more scroll). The frames are
   already picked so each step shows about the same amount of motion (see README). */
window.FLIGHT = {
  hq: { count: 78, weight: 0.827 },
  conn1: { count: 72, weight: 0.754 },
  strategi: { count: 96, weight: 1.003 },
  conn2: { count: 83, weight: 0.878 },
  operasional: { count: 133, weight: 1.354 },
  conn3: { count: 73, weight: 0.781 },
  teknologi: { count: 131, weight: 1.329 },
  conn4: { count: 95, weight: 0.987 },
  hasil: { count: 105, weight: 1.087 },
};
