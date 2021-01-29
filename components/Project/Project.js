import React, { useRef, useEffect } from 'react';

import {gql, useQuery} from "@apollo/react-hooks"

import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Carousel from 'react-slick';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import imgAPI from '../../public/images/imgAPI';
import { withTranslation } from '../../i18n';
import DotParallax from '../Parallax/Dots';
import Title from '../Title';
import GeneralCard from '../Cards/General';
import useStyle from './project-style';

const QUERY_CONTENT_PROJECTS = gql`
  query contentsQuery($app: selectApp!) {
    contents(app: $app) {
      id
      meta {
        id
        language
        title
        tags
        keywords
        description
        text
      }
      image {
        id
        url
      }
      users {
        id
        name
        surname
      }
      images {
        id
        name
        url
      }
      type {
        id
        path
      }
      status {
        id
        path
        meta {
          title
        }
      }
    }
  }
`
const projectData = [
  {
    img: imgAPI.architect[0],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[1],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[2],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[3],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[4],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[5],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
];

function Project(props) {
  const slider = useRef(null);
  const { t, app } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const classes = useStyle();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  const {loading, error, data} = useQuery(QUERY_CONTENT_PROJECTS, {
    variables: {
      app: {
        id: app.id
      }
    }
  })
  useEffect(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(projectData.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <DotParallax />
      </div>
      <Container>
        <div className={classes.floatingTitle}>
          <Title
            head={t('common:architect-landing.project_title')}
            desc={t('common:architect-landing.project_desc')}
          />
        </div>
      </Container>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={clsx(classes.props, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {data && data.contents.filter(co => co.type.path === "content:type:project").map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <GeneralCard
                  item={item}
                  img={item.image && item.image.url}
                  title={item.meta && item.meta.title}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={clsx(classes.props, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
        </div>
        <IconButton
          className={clsx(classes.nav, classes.prev)}
          onClick={() => slider.current.slickPrev()}
        >
          <i className="ion-ios-arrow-left" />
        </IconButton>
        <IconButton
          className={clsx(classes.nav, classes.next)}
          onClick={() => slider.current.slickNext()}
        >
          <i className="ion-ios-arrow-forward" />
        </IconButton>
      </div>
    </div>
  );
}

Project.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['architect-landing'])(Project);
