import React from 'react';
import './accordian.css';
import TechSpecs from './tech-specs';

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [
  {
    title: 'Product Type',
    paragraph: <div className="form-group"><TechSpecs/></div>
/*     <div className="form-group">
        <label>Model Year </label>
        <input name="min-year" type="number" maxlength="4" minLength="4"/>
        <input name="max-year" type="number" maxlength="4" minLength="4"/>
    </div>  */
  },
  {
    title: 'Technical Specifications',
    paragragh:<div className="form-group"><TechSpecs/></div>
        
  },
  {
    title: 'Brand',
    paragraph
  },
  {
    title: 'Past Selections',
    paragraph
  },
  {
    title: 'Certifications',
    paragraph
  }
]

export const Accordian = (props) => {

    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
};

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        paragraph,
        title
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
                {paragraph}
            </div>
          </div>
      </div>
    )
  }
}

export default Accordian;
