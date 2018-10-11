<template>
  <div> 
    <!-- TOOLBAR SECTION -->

    <v-toolbar app>
      <v-toolbar-title class="toolbar-title"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="140.98001098632812" viewBox="1.6200000047683716 4.679999828338623 140.98001098632812 30.560001373291016" overflow="visible" style="overflow: visible;"><path stroke="none" fill="#000000" d="M10.91 18.22L10.91 27.72L10.55 27.72L10.55 8.28L10.91 8.28L10.91 17.86L18.72 17.86L22.86 8.28L23.26 8.28L19.12 17.86L20.59 17.86L20.59 17.86Q22.79 17.86 23.87 18.68L23.87 18.68L23.87 18.68Q24.95 19.51 24.95 21.38L24.95 21.38L24.95 27.72L24.59 27.72L24.59 21.38L24.59 21.38Q24.59 19.66 23.58 18.94L23.58 18.94L23.58 18.94Q22.57 18.22 20.59 18.22L20.59 18.22L10.91 18.22ZM7.92 30.96L13.50 30.96L13.50 30.96Q14.18 30.96 14.49 30.65L14.49 30.65L14.49 30.65Q14.80 30.35 14.80 29.66L14.80 29.66L14.80 21.42L19.55 21.42L19.55 21.42Q20.12 21.42 20.41 21.74L20.41 21.74L20.41 21.74Q20.70 22.07 20.70 22.64L20.70 22.64L20.70 29.66L20.70 29.66Q20.70 30.35 21.01 30.65L21.01 30.65L21.01 30.65Q21.31 30.96 22.00 30.96L22.00 30.96L27.54 30.96L27.54 30.96Q28.22 30.96 28.53 30.65L28.53 30.65L28.53 30.65Q28.84 30.35 28.84 29.66L28.84 29.66L28.84 19.51L28.84 19.51Q28.84 17.35 27.63 16.04L27.63 16.04L27.63 16.04Q26.42 14.72 24.41 14.62L24.41 14.62L28.08 6.23L28.08 6.23Q28.33 5.65 28.12 5.35L28.12 5.35L28.12 5.35Q27.90 5.04 27.29 5.04L27.29 5.04L21.74 5.04L21.74 5.04Q21.06 5.04 20.63 5.31L20.63 5.31L20.63 5.31Q20.20 5.58 19.94 6.23L19.94 6.23L16.24 14.62L14.80 14.62L14.80 6.34L14.80 6.34Q14.80 5.65 14.49 5.35L14.49 5.35L14.49 5.35Q14.18 5.04 13.50 5.04L13.50 5.04L7.92 5.04L7.92 5.04Q7.24 5.04 6.93 5.35L6.93 5.35L6.93 5.35Q6.62 5.65 6.62 6.34L6.62 6.34L6.62 29.66L6.62 29.66Q6.62 30.35 6.93 30.65L6.93 30.65L6.93 30.65Q7.24 30.96 7.92 30.96L7.92 30.96ZM14.65 31.00L14.65 31.00L9.97 34.88L9.97 34.88Q9.83 35.03 9.52 35.14L9.52 35.14L9.52 35.14Q9.22 35.24 8.86 35.24L8.86 35.24L3.28 35.24L3.28 35.24Q2.41 35.24 2.02 34.85L2.02 34.85L2.02 34.85Q1.62 34.45 1.62 33.59L1.62 33.59L1.62 10.26L1.62 10.26Q1.62 9.79 1.75 9.47L1.75 9.47L1.75 9.47Q1.87 9.14 2.12 8.93L2.12 8.93L6.77 5.00L6.77 5.00Q6.95 4.86 7.25 4.77L7.25 4.77L7.25 4.77Q7.56 4.68 7.92 4.68L7.92 4.68L13.50 4.68L13.50 4.68Q14.36 4.68 14.76 5.08L14.76 5.08L14.76 5.08Q15.16 5.47 15.16 6.34L15.16 6.34L15.16 9.61L15.16 9.61Q15.26 9.47 15.37 9.31L15.37 9.31L15.37 9.31Q15.48 9.14 15.62 9.04L15.62 9.04L20.27 5.11L20.27 5.11Q20.52 4.90 20.90 4.79L20.90 4.79L20.90 4.79Q21.28 4.68 21.74 4.68L21.74 4.68L27.29 4.68L27.29 4.68Q28.19 4.68 28.48 5.13L28.48 5.13L28.48 5.13Q28.76 5.58 28.40 6.37L28.40 6.37L24.95 14.29L24.95 14.29Q26.89 14.54 28.04 15.95L28.04 15.95L28.04 15.95Q29.20 17.35 29.20 19.51L29.20 19.51L29.20 29.66L29.20 29.66Q29.20 30.13 29.07 30.46L29.07 30.46L29.07 30.46Q28.94 30.78 28.69 31.00L28.69 31.00L24.01 34.88L24.01 34.88Q23.87 35.03 23.56 35.14L23.56 35.14L23.56 35.14Q23.26 35.24 22.90 35.24L22.90 35.24L17.35 35.24L17.35 35.24Q16.49 35.24 16.09 34.85L16.09 34.85L16.09 34.85Q15.70 34.45 15.70 33.59L15.70 33.59L15.70 26.57L15.70 26.57Q15.70 26.21 15.55 25.99L15.55 25.99L15.55 25.99Q15.41 25.78 15.16 25.74L15.16 25.74L15.16 29.66L15.16 29.66Q15.16 30.13 15.03 30.46L15.03 30.46L15.03 30.46Q14.90 30.78 14.65 31.00ZM50.44 35.24L50.44 35.24L33.73 35.24L33.73 35.24Q32.87 35.24 32.47 34.85L32.47 34.85L32.47 34.85Q32.08 34.45 32.08 33.59L32.08 33.59L32.08 10.26L32.08 10.26Q32.08 9.79 32.20 9.47L32.20 9.47L32.20 9.47Q32.33 9.14 32.58 8.93L32.58 8.93L37.22 5.00L37.22 5.00Q37.40 4.86 37.71 4.77L37.71 4.77L37.71 4.77Q38.02 4.68 38.38 4.68L38.38 4.68L55.08 4.68L55.08 4.68Q55.94 4.68 56.34 5.08L56.34 5.08L56.34 5.08Q56.74 5.47 56.74 6.34L56.74 6.34L56.74 10.55L56.74 10.55Q56.74 11.02 56.61 11.34L56.61 11.34L56.61 11.34Q56.48 11.66 56.23 11.88L56.23 11.88L53.14 14.44L53.14 14.44Q53.50 14.62 53.66 14.98L53.66 14.98L53.66 14.98Q53.82 15.34 53.82 15.91L53.82 15.91L53.82 19.76L53.82 19.76Q53.82 20.23 53.69 20.56L53.69 20.56L53.69 20.56Q53.57 20.88 53.32 21.10L53.32 21.10L50.11 23.80L55.08 23.80L55.08 23.80Q55.94 23.80 56.34 24.19L56.34 24.19L56.34 24.19Q56.74 24.59 56.74 25.45L56.74 25.45L56.74 29.66L56.74 29.66Q56.74 30.13 56.61 30.46L56.61 30.46L56.61 30.46Q56.48 30.78 56.23 31.00L56.23 31.00L51.55 34.88L51.55 34.88Q51.41 35.03 51.10 35.14L51.10 35.14L51.10 35.14Q50.80 35.24 50.44 35.24ZM38.38 30.96L55.08 30.96L55.08 30.96Q55.76 30.96 56.07 30.65L56.07 30.65L56.07 30.65Q56.38 30.35 56.38 29.66L56.38 29.66L56.38 25.45L56.38 25.45Q56.38 24.77 56.07 24.46L56.07 24.46L56.07 24.46Q55.76 24.16 55.08 24.16L55.08 24.16L45.14 24.16L45.14 21.06L52.16 21.06L52.16 21.06Q52.85 21.06 53.15 20.75L53.15 20.75L53.15 20.75Q53.46 20.45 53.46 19.76L53.46 19.76L53.46 15.91L53.46 15.91Q53.46 15.23 53.15 14.92L53.15 14.92L53.15 14.92Q52.85 14.62 52.16 14.62L52.16 14.62L45.14 14.62L45.14 11.84L55.08 11.84L55.08 11.84Q55.76 11.84 56.07 11.54L56.07 11.54L56.07 11.54Q56.38 11.23 56.38 10.55L56.38 10.55L56.38 6.34L56.38 6.34Q56.38 5.65 56.07 5.35L56.07 5.35L56.07 5.35Q55.76 5.04 55.08 5.04L55.08 5.04L38.38 5.04L38.38 5.04Q37.69 5.04 37.39 5.35L37.39 5.35L37.39 5.35Q37.08 5.65 37.08 6.34L37.08 6.34L37.08 29.66L37.08 29.66Q37.08 30.35 37.39 30.65L37.39 30.65L37.39 30.65Q37.69 30.96 38.38 30.96L38.38 30.96ZM41.36 27.36L53.14 27.36L53.14 27.72L41.00 27.72L41.00 8.28L53.14 8.28L53.14 8.64L41.36 8.64L41.36 17.68L50.22 17.68L50.22 18.04L41.36 18.04L41.36 27.36ZM77.58 35.24L77.58 35.24L60.88 35.24L60.88 35.24Q60.01 35.24 59.62 34.85L59.62 34.85L59.62 34.85Q59.22 34.45 59.22 33.59L59.22 33.59L59.22 10.26L59.22 10.26Q59.22 9.79 59.35 9.47L59.35 9.47L59.35 9.47Q59.47 9.14 59.72 8.93L59.72 8.93L64.37 5.00L64.37 5.00Q64.55 4.86 64.85 4.77L64.85 4.77L64.85 4.77Q65.16 4.68 65.52 4.68L65.52 4.68L82.22 4.68L82.22 4.68Q83.09 4.68 83.48 5.08L83.48 5.08L83.48 5.08Q83.88 5.47 83.88 6.34L83.88 6.34L83.88 10.55L83.88 10.55Q83.88 11.02 83.75 11.34L83.75 11.34L83.75 11.34Q83.63 11.66 83.38 11.88L83.38 11.88L80.28 14.44L80.28 14.44Q80.64 14.62 80.80 14.98L80.80 14.98L80.80 14.98Q80.96 15.34 80.96 15.91L80.96 15.91L80.96 19.76L80.96 19.76Q80.96 20.23 80.84 20.56L80.84 20.56L80.84 20.56Q80.71 20.88 80.46 21.10L80.46 21.10L77.26 23.80L82.22 23.80L82.22 23.80Q83.09 23.80 83.48 24.19L83.48 24.19L83.48 24.19Q83.88 24.59 83.88 25.45L83.88 25.45L83.88 29.66L83.88 29.66Q83.88 30.13 83.75 30.46L83.75 30.46L83.75 30.46Q83.63 30.78 83.38 31.00L83.38 31.00L78.70 34.88L78.70 34.88Q78.55 35.03 78.25 35.14L78.25 35.14L78.25 35.14Q77.94 35.24 77.58 35.24ZM65.52 30.96L82.22 30.96L82.22 30.96Q82.91 30.96 83.21 30.65L83.21 30.65L83.21 30.65Q83.52 30.35 83.52 29.66L83.52 29.66L83.52 25.45L83.52 25.45Q83.52 24.77 83.21 24.46L83.21 24.46L83.21 24.46Q82.91 24.16 82.22 24.16L82.22 24.16L72.29 24.16L72.29 21.06L79.31 21.06L79.31 21.06Q79.99 21.06 80.30 20.75L80.30 20.75L80.30 20.75Q80.60 20.45 80.60 19.76L80.60 19.76L80.60 15.91L80.60 15.91Q80.60 15.23 80.30 14.92L80.30 14.92L80.30 14.92Q79.99 14.62 79.31 14.62L79.31 14.62L72.29 14.62L72.29 11.84L82.22 11.84L82.22 11.84Q82.91 11.84 83.21 11.54L83.21 11.54L83.21 11.54Q83.52 11.23 83.52 10.55L83.52 10.55L83.52 6.34L83.52 6.34Q83.52 5.65 83.21 5.35L83.21 5.35L83.21 5.35Q82.91 5.04 82.22 5.04L82.22 5.04L65.52 5.04L65.52 5.04Q64.84 5.04 64.53 5.35L64.53 5.35L64.53 5.35Q64.22 5.65 64.22 6.34L64.22 6.34L64.22 29.66L64.22 29.66Q64.22 30.35 64.53 30.65L64.53 30.65L64.53 30.65Q64.84 30.96 65.52 30.96L65.52 30.96ZM68.51 27.36L80.28 27.36L80.28 27.72L68.15 27.72L68.15 8.28L80.28 8.28L80.28 8.64L68.51 8.64L68.51 17.68L77.36 17.68L77.36 18.04L68.51 18.04L68.51 27.36ZM93.60 35.24L93.60 35.24L88.02 35.24L88.02 35.24Q87.16 35.24 86.76 34.85L86.76 34.85L86.76 34.85Q86.36 34.45 86.36 33.59L86.36 33.59L86.36 10.26L86.36 10.26Q86.36 9.79 86.49 9.47L86.49 9.47L86.49 9.47Q86.62 9.14 86.87 8.93L86.87 8.93L91.51 5.00L91.51 5.00Q91.69 4.86 92.00 4.77L92.00 4.77L92.00 4.77Q92.30 4.68 92.66 4.68L92.66 4.68L103.68 4.68L103.68 4.68Q106.24 4.68 107.96 5.22L107.96 5.22L107.96 5.22Q109.69 5.76 110.70 6.73L110.70 6.73L110.70 6.73Q111.71 7.70 112.12 9.07L112.12 9.07L112.12 9.07Q112.54 10.44 112.54 12.06L112.54 12.06L112.54 16.67L112.54 16.67Q112.54 18.40 112.05 19.82L112.05 19.82L112.05 19.82Q111.56 21.24 110.38 22.25L110.38 22.25L105.70 26.14L105.70 26.14Q104.80 26.89 103.37 27.38L103.37 27.38L103.37 27.38Q101.95 27.86 99.90 27.94L99.90 27.94L99.90 29.66L99.90 29.66Q99.90 30.13 99.77 30.46L99.77 30.46L99.77 30.46Q99.65 30.78 99.40 31.00L99.40 31.00L94.72 34.88L94.72 34.88Q94.57 35.03 94.27 35.14L94.27 35.14L94.27 35.14Q93.96 35.24 93.60 35.24ZM92.66 30.96L98.24 30.96L98.24 30.96Q98.93 30.96 99.23 30.65L99.23 30.65L99.23 30.65Q99.54 30.35 99.54 29.66L99.54 29.66L99.54 23.69L103.68 23.69L103.68 23.69Q108.58 23.69 110.38 21.74L110.38 21.74L110.38 21.74Q112.18 19.80 112.18 16.67L112.18 16.67L112.18 12.06L112.18 12.06Q112.18 8.93 110.38 6.98L110.38 6.98L110.38 6.98Q108.58 5.04 103.68 5.04L103.68 5.04L92.66 5.04L92.66 5.04Q91.98 5.04 91.67 5.35L91.67 5.35L91.67 5.35Q91.37 5.65 91.37 6.34L91.37 6.34L91.37 29.66L91.37 29.66Q91.37 30.35 91.67 30.65L91.67 30.65L91.67 30.65Q91.98 30.96 92.66 30.96L92.66 30.96ZM103.18 20.63L103.18 20.63L95.76 20.63L95.76 27.72L95.40 27.72L95.40 8.28L103.18 8.28L103.18 8.28Q104.87 8.28 105.93 8.66L105.93 8.66L105.93 8.66Q106.99 9.04 107.57 9.68L107.57 9.68L107.57 9.68Q108.14 10.33 108.36 11.23L108.36 11.23L108.36 11.23Q108.58 12.13 108.58 13.18L108.58 13.18L108.58 15.84L108.58 15.84Q108.58 16.88 108.36 17.77L108.36 17.77L108.36 17.77Q108.14 18.65 107.57 19.28L107.57 19.28L107.57 19.28Q106.99 19.91 105.93 20.27L105.93 20.27L105.93 20.27Q104.87 20.63 103.18 20.63ZM95.76 8.64L95.76 20.27L103.18 20.27L103.18 20.27Q104.76 20.27 105.75 19.94L105.75 19.94L105.75 19.94Q106.74 19.62 107.28 19.03L107.28 19.03L107.28 19.03Q107.82 18.43 108.02 17.62L108.02 17.62L108.02 17.62Q108.22 16.81 108.22 15.84L108.22 15.84L108.22 13.18L108.22 13.18Q108.22 12.20 108.02 11.38L108.02 11.38L108.02 11.38Q107.82 10.55 107.28 9.94L107.28 9.94L107.28 9.94Q106.74 9.32 105.75 8.98L105.75 8.98L105.75 8.98Q104.76 8.64 103.18 8.64L103.18 8.64L95.76 8.64ZM99.47 17.21L99.47 11.77L102.71 11.77L102.71 11.77Q103.75 11.77 104.08 12.31L104.08 12.31L104.08 12.31Q104.40 12.85 104.40 13.54L104.40 13.54L104.40 15.44L104.40 15.44Q104.40 16.13 104.08 16.67L104.08 16.67L104.08 16.67Q103.75 17.21 102.71 17.21L102.71 17.21L99.47 17.21ZM131.62 8.64L131.62 8.64L123.77 8.64L123.77 19.04L131.62 19.04L131.62 19.04Q133.85 19.04 134.60 17.96L134.60 17.96L134.60 17.96Q135.36 16.88 135.36 14.90L135.36 14.90L135.36 12.38L135.36 12.38Q135.36 10.73 134.44 9.68L134.44 9.68L134.44 9.68Q133.52 8.64 131.62 8.64ZM127.66 16.13L127.66 11.52L130.36 11.52L130.36 11.52Q131.29 11.52 131.62 12.01L131.62 12.01L131.62 12.01Q131.94 12.49 131.94 13.21L131.94 13.21L131.94 14.44L131.94 14.44Q131.94 15.16 131.62 15.64L131.62 15.64L131.62 15.64Q131.29 16.13 130.36 16.13L130.36 16.13L127.66 16.13ZM123.77 19.37L123.77 27.72L123.41 27.72L123.41 8.28L131.62 8.28L131.62 8.28Q133.70 8.28 134.71 9.45L134.71 9.45L134.71 9.45Q135.72 10.62 135.72 12.38L135.72 12.38L135.72 14.87L135.72 14.87Q135.72 16.52 135.29 17.59L135.29 17.59L135.29 17.59Q134.86 18.65 133.56 19.04L133.56 19.04L133.96 19.04L133.96 19.04Q136.15 19.04 137.23 20.03L137.23 20.03L137.23 20.03Q138.31 21.02 138.31 22.90L138.31 22.90L138.31 27.72L137.95 27.72L137.95 22.90L137.95 22.90Q137.95 21.13 136.98 20.25L136.98 20.25L136.98 20.25Q136.01 19.37 133.96 19.37L133.96 19.37L123.77 19.37ZM120.82 30.96L126.36 30.96L126.36 30.96Q127.04 30.96 127.35 30.65L127.35 30.65L127.35 30.65Q127.66 30.35 127.66 29.66L127.66 29.66L127.66 22.61L132.70 22.61L132.70 22.61Q133.45 22.61 133.76 22.99L133.76 22.99L133.76 22.99Q134.06 23.36 134.06 24.16L134.06 24.16L134.06 29.66L134.06 29.66Q134.06 30.35 134.37 30.65L134.37 30.65L134.37 30.65Q134.68 30.96 135.36 30.96L135.36 30.96L140.94 30.96L140.94 30.96Q141.62 30.96 141.93 30.65L141.93 30.65L141.93 30.65Q142.24 30.35 142.24 29.66L142.24 29.66L142.24 22.03L142.24 22.03Q142.24 19.76 141.03 18.40L141.03 18.40L141.03 18.40Q139.82 17.03 137.88 16.81L137.88 16.81L137.88 16.81Q139.00 16.34 139.45 15.28L139.45 15.28L139.45 15.28Q139.90 14.22 139.90 12.71L139.90 12.71L139.90 11.05L139.90 11.05Q139.90 8.39 138.37 6.71L138.37 6.71L138.37 6.71Q136.84 5.04 132.80 5.04L132.80 5.04L120.82 5.04L120.82 5.04Q120.13 5.04 119.83 5.35L119.83 5.35L119.83 5.35Q119.52 5.65 119.52 6.34L119.52 6.34L119.52 29.66L119.52 29.66Q119.52 30.35 119.83 30.65L119.83 30.65L119.83 30.65Q120.13 30.96 120.82 30.96L120.82 30.96ZM127.51 31.00L127.51 31.00L122.83 34.88L122.83 34.88Q122.69 35.03 122.38 35.14L122.38 35.14L122.38 35.14Q122.08 35.24 121.72 35.24L121.72 35.24L116.17 35.24L116.17 35.24Q115.31 35.24 114.91 34.85L114.91 34.85L114.91 34.85Q114.52 34.45 114.52 33.59L114.52 33.59L114.52 10.26L114.52 10.26Q114.52 9.79 114.64 9.47L114.64 9.47L114.64 9.47Q114.77 9.14 115.02 8.93L115.02 8.93L119.66 5.00L119.66 5.00Q119.84 4.86 120.15 4.77L120.15 4.77L120.15 4.77Q120.46 4.68 120.82 4.68L120.82 4.68L132.80 4.68L132.80 4.68Q137.09 4.68 138.67 6.46L138.67 6.46L138.67 6.46Q140.26 8.24 140.26 11.05L140.26 11.05L140.26 12.71L140.26 12.71Q140.26 14.04 139.93 15.03L139.93 15.03L139.93 15.03Q139.61 16.02 138.89 16.63L138.89 16.63L138.85 16.63L138.85 16.63Q140.54 17.10 141.57 18.50L141.57 18.50L141.57 18.50Q142.60 19.91 142.60 22.03L142.60 22.03L142.60 29.66L142.60 29.66Q142.60 30.13 142.47 30.46L142.47 30.46L142.47 30.46Q142.34 30.78 142.09 31.00L142.09 31.00L137.41 34.88L137.41 34.88Q137.27 35.03 136.96 35.14L136.96 35.14L136.96 35.14Q136.66 35.24 136.30 35.24L136.30 35.24L130.72 35.24L130.72 35.24Q129.85 35.24 129.46 34.85L129.46 34.85L129.46 34.85Q129.06 34.45 129.06 33.59L129.06 33.59L129.06 28.08L129.06 28.08Q129.06 27.50 128.84 27.20L128.84 27.20L128.84 27.20Q128.63 26.89 128.05 26.89L128.05 26.89L128.02 26.89L128.02 29.66L128.02 29.66Q128.02 30.13 127.89 30.46L127.89 30.46L127.89 30.46Q127.76 30.78 127.51 31.00Z" transform="rotate(0 72.11000549793243 19.96000051498413)"></path></svg></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-card class="searchbar">
        <v-text-field label="Search Keepr" prepend prepend-icon="search">
        </v-text-field>
      </v-card>

      <v-btn class="upper logout" raised @click="logoutDialog = true">logout</v-btn>
    </v-toolbar>


      <!-- DASHBOARD SECTION -->


    <div class="page-wrapper">

      <!-- HEADER -->

      <section>
        <h1 class="upper heading">welcome to <br/> {{user.username}}'s dashboard</h1>
      </section>
    
      <v-divider color="#2ec4b6"></v-divider>

      <!-- USER VAULTS & KEEPS -->
        
      <section>

        <!-- DASHBOARD VAULTS -->

        <!-- TITLE AND NEW VAULT SECTION -->
        <v-card class="dashboard-vaults">
          <v-container row wrap>
            <v-flex xs12>
              <v-card-title class="upper card-heading">
                <p>Your vaults</p>
                <v-spacer></v-spacer>
                <v-btn color="#2ec4b6" @click="newVaultDialogVal = true" fab>
                  <v-icon color="#ffffff">add</v-icon>
                </v-btn>
              </v-card-title>

              <v-divider color="#2ec4b6"></v-divider>

        <!-- CURRENT VAULTS SECTION -->
              <v-layout v-if="userVaults.length > 0">
                <div class="">
                  <v-card v-for="vault in userVaults" :key="vault._id" class=""> 
                    <v-img>
                    <p class="">Vault</p>
                    </v-img>

                    <v-card-title primary-title>
                      <div>
                        <h4 class="">{{vault.name}}</h4>
                        <p class="">{{vault.description}}</p>
                      </div>
                    </v-card-title>
                  </v-card>
                </div>
              </v-layout>
            </v-flex>
          </v-container>
        </v-card>

        <v-divider color="#2ec4b6"></v-divider>


        <!-- DASHBOARD KEEPS -->

        <!-- TITLE AND NEW KEEP SECTION -->
        <v-card class="dashboard-keeps">
          <v-container row wrap>
            <v-flex xs12>
              <v-card-title class="upper card-heading">
                <p>Your keeps</p>
                <v-spacer></v-spacer>
                <v-btn color="#2ec4b6" @click="newKeepDialogVal = true" fab>
                  <v-icon color="#ffffff">add</v-icon>
                </v-btn>
              </v-card-title>

              <v-divider color="#2ec4b6"></v-divider>

        
        <!-- CURRENT KEEPS SECTION -->
              <v-layout v-if="userKeeps.length > 0">
                <div class="keeps-container">
                  <v-card v-for="keep in userKeeps" :key="keep._id" class="keep-card"> 
                    <v-img 
                      :src="keep.img" 
                      aspect-ratio="1.5" 
                      class="keep-img"
                    >
                    <p class="keep-card-actions">KEEP</p>
                    </v-img>

                    <v-card-title primary-title>
                      <div>
                        <h4 class="keep-name">{{keep.name}}</h4>
                        <p class="keep-description">{{keep.description}}</p>
                      </div>
                    </v-card-title>
                  </v-card>
                </div>
              </v-layout>

              <!-- IF YOU DONT HAVE ANY KEEPS -->

              <div v-else class="no-keeps">
                <p class="upper">You currently don't have any keeps</p>              
              </div>

            </v-flex>
          </v-container>
        </v-card>

        <v-divider color="#2ec4b6"></v-divider>
      </section>


      <!-- DIALOG SECTION -->


      <!-- VAULT DIALOG -->
      <v-dialog v-model="newVaultDialogVal" width="800">
        <v-card class="form">
          <v-card-title class="upper text-bold">Create new vault</v-card-title>

          <v-divider color="#2ec4b6"></v-divider>

          <v-text-field label="Title" v-model="newVaultDialog.name"></v-text-field>
          <v-text-field label="Description" v-model="newVaultDialog.description"></v-text-field>

          <v-card-actions>
            <v-btn type="submit" @click="newVault(); newVaultDialogVal = false;" class="upper">create vault</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- KEEP DIALOG -->
      <v-dialog v-model="newKeepDialogVal" width="800">
        <v-card class="form">
          <v-card-title class="upper">Create new keep</v-card-title>

          <v-divider color="#2ec4b6"></v-divider>

          <v-text-field label="Title" v-model="newKeepDialog.name"></v-text-field>
          <v-text-field label="Img Link" v-model="newKeepDialog.img"></v-text-field>
          <v-text-field label="Description" v-model="newKeepDialog.description"></v-text-field>
          <v-checkbox label="Make Keep Private" v-model="newKeepDialog.isPrivate"></v-checkbox>

          <v-card-actions>
            <v-btn type="submit" @click="newKeep(); newKeepDialogVal = false;" class="upper">create keep</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- LOGOUT DIALOG -->
      <v-dialog v-model="logoutDialog" width="800">
        <v-card class="form">
          <v-card-title class="upper">Logout</v-card-title>

          <v-divider color="#2ec4b6"></v-divider>

          <v-card-text class="upper">are you sure you want to logout?</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="upper" @click="logoutDialog = false">cancel</v-btn>
            <v-btn class="upper" @click="logout">logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      newVaultDialog: {
        name: "",
        description: ""
      },
      newVaultDialogVal: false,
      newKeepDialog: {
        name: "",
        img: "",
        description: "",
        isPrivate: false
      },
      newKeepDialogVal: false,
      logoutDialog: false
    };
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
    userKeeps() {
      return this.$store.state.userKeeps;
    },
    userVaults() {
      return this.$store.state.userVaults;
    }
  },
  mounted() {
    //blocks users not logged in
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "login" });
    } else {
      this.$store.dispatch("getUserKeeps");
      this.$store.dispatch("getUserVaults");
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    newVault() {
      let newVaultData = {
        name: this.newVaultDialog.name,
        description: this.newVaultDialog.description
      };
      this.$store.dispatch("newVault", newVaultData);
      this.newVaultDialog.name = "";
      this.newVaultDialog.description = "";
    },
    newKeep() {
      let newKeepData = {
        name: this.newKeepDialog.name,
        img: this.newKeepDialog.img,
        description: this.newKeepDialog.description
      };
      newKeepData.isPrivate = this.newKeepDialog.isPrivate ? 1 : 0;
      this.$store.dispatch("newKeep", newKeepData);
      this.newKeepDialog.name = "";
      this.newKeepDialog.img = "";
      this.newKeepDialog.description = "";
      this.newKeepDialog.isPrivate = false;
    }
  }
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
}
.page-wrapper {
  height: 100%;
  width: calc(100% - 2rem);
  max-width: 100rem;
  margin: auto;
  margin-top: 2rem;
  padding-top: 64px;
  padding-bottom: 4rem;
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  background-color: #d6d6d6;
  overflow-y: auto;
  position: relative;
}
.upper {
  text-transform: uppercase !important;
  font-weight: bold;
}
.fab {
  background-color: #2ec4b6;
  font-family: Roboto;
  border-radius: 2rem;
  border: solid 1px #2ec4b6;
  height: 2.4rem;
  padding-left: 0.28rem;
  padding-right: 0.28rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
.dashboard-vaults {
  margin: 1rem;
}
.dashboard-keeps {
  margin: 1rem;
}
.heading {
  margin-bottom: 2rem;
  font-size: 3rem;
  display: flex;
  flex-direction: start;
  text-align: left;
  color: #e71d36;
}
.toolbar-title {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: start;
  color: #e71d36;
}
.searchbar {
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  width: 30%;
}
.card-heading {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  color: #565656;
}
.no-vaults {
  margin: 5rem;
  color: #7f7f7f;
}
.no-keeps {
  margin: 5rem;
  color: #7f7f7f;
}
.keep-card {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 2.5rem;
  margin-left: 2.5rem;
  width: 22rem;
  &:hover .keep-card-actions {
    opacity: 1;
  }
}
.keep-name {
  font-size: 2rem;
  color: #565656;
  display: flex;
  justify-content: start;
}
.keep-description {
  font-size: 1.2rem;
  color: #565656;
  display: flex;
  justify-content: start;
}
.keeps-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.keep-card-actions {
  opacity: 0;
  transition: opacity 200ms;
}
</style>
