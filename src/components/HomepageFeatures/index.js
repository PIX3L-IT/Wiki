import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Misión',
    // Usar lo siguiente para agregar imagenes
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Materializar los sueños mediante soluciones tecnológicas.
      </>
    ),
  },
  {
    title: 'Visión',
    description: (
      <>
        Ser un equipo de excelencia que transforma vidas con tecnología, innovación y colaboración
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}> {}
      <div className="text--center">
        {/* EDITAR EN EL CASO DE METER IMAGENES A MISION Y VISION */}
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}