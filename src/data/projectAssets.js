export const projectAssets = {
  chesstrix: {
    icon: 'Chesstrix.png',
    homeBanner: 'Chess Banner.png',
    caseStudyBanner: 'Chesstrix-Banner.png',
    screenshotsFolder: 'Chesstrix',
  },
  'xo-quest': {
    icon: 'XOQuest.png',
    homeBanner: 'XOQuest Banner.png',
    caseStudyBanner: 'XOQuest-Banne.png',
    screenshotsFolder: 'XO Quest',
  },
  'think-sudoku': {
    icon: 'Sudoku.png',
    homeBanner: 'Sudoku Banner.png',
    caseStudyBanner: 'ThinkSudoku-Banner.png',
    screenshotsFolder: 'Sudoku',
  },
  'spin-shot-pro': {
    icon: 'SpinShot.jpg',
    homeBanner: 'SpinShot Banner.png',
    caseStudyBanner: 'SpinShotPro-Banner.png',
    screenshotsFolder: 'Spin Shot',
  },
  zyyngo: {
    icon: 'Zyyngo.png',
    homeBanner: 'Zyyngo Banner.png',
    caseStudyBanner: 'Zyyngo-Banner.png',
    screenshotsFolder: 'Zyyngo',
  },
  'ufo-io': {
    icon: 'UFO.png',
    homeBanner: 'UFO-Banner.png',
    caseStudyBanner: 'UFO-Banner.png',
    screenshotsFolder: 'UFO',
  },
  'road-runner': {
    icon: 'RoadRunner.png',
    homeBanner: 'RoadRunner-Banner.png',
    caseStudyBanner: 'RoadRunner-Banner.png',
    screenshotsFolder: 'RoadRunner',
  },
};

export const getProjectAssets = (projectId) => projectAssets[projectId] || null;
