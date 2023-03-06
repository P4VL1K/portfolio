import React, {useCallback} from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import s from './Particle.module.css'

export const Particle = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return <Particles id="tsparticles"
                      init={particlesInit}
                      loaded={particlesLoaded}
                      className={s.particle}
                      options={{
                          fpsLimit: 60,
                          particles: {
                              color: { value: "#ffffff" },
                              move: {
                                  direction: "none",
                                  enable: true,
                                  outModes: "out",
                                  random: false,
                                  speed: 3,
                                  straight: false
                              },
                              number: {
                                  density: {
                                      enable: true,
                                      area: 800
                                  },
                                  value: 80
                              },
                              opacity: {
                                  animation: {
                                      enable: true,
                                      speed: 0.05,
                                      sync: true,
                                      startValue: "max",
                                      count: 1,
                                      destroy: "min"
                                  },
                                  value: {
                                      min: 0,
                                      max: 0.5
                                  }
                              },
                              shape: {
                                  type: "circle"
                              },
                              size: {
                                  value: { min: 1, max: 5 }
                              }
                          },
                          detectRetina: true,
                      }}/>
}