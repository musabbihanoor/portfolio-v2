const particlesConfig = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 400,
      },
    },
    color: {
      value: "#000",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000",
      },
      image: {
        width: 10,
        height: 10,
      },
    },
    opacity: {
      value: 0.1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: false,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#32343E",
      opacity: 0.7,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000,
      },
    },
    array: [],
  },
  // interactivity: {
  //   detect_on: "canvas",
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "push",
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: "push",
  //     },
  //     resize: true,
  //   },
  //   modes: {
  //     grab: {
  //       distance: 100,
  //       line_linked: {
  //         opacity: 0.6,
  //       },
  //     },
  //     bubble: {
  //       distance: 200,
  //       size: 80,
  //       duration: 0.4,
  //     },
  //     repulse: {
  //       distance: 200,
  //       duration: 0.4,
  //     },
  //     push: {
  //       particles_nb: 4,
  //     },
  //     remove: {
  //       particles_nb: 2,
  //     },
  //   },
  //   mouse: {},
  // },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 80,
        duration: 0.4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
    mouse: {},
  },
  retina_detect: false,
  fn: {
    interact: {},
    modes: {},
    vendors: {},
  },
  tmp: {},
};
export default particlesConfig;
