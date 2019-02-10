import React from 'react';
import Item from './feature-item';

export default class Features extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [
                {
                    id: 'react-icon',
                    icon: 'fab fa-react',
                    title: 'ReactJS',
                    description: 'Window Date Picker has its own ReactJS component so you can use Window Date Picker with ReactJS.'
                },
                {
                    id: 'ts-icon',
                    icon: 'fas fa-code',
                    title: 'TypeScript',
                    description: <p>Window Date Picker has declaration typescript files<i>(d.ts)</i> so you can use Window Date Picker with TypeScript.</p>
                },
                {
                    id: 'color-icon',
                    icon: 'fas fa-palette',
                    title: 'Multi-Color',
                    description: 'Window Date Picker has ready-to-use color themes. You can also create new themes for Window Date Picker using SASS.'
                },
                {
                    id: 'lang-icon',
                    icon: 'fas fa-language',
                    title: 'Multi-Language',
                    description: 'Window Date Picker has multi-language support. You can create and change language. Default language is English.'
                },
                {
                    id: 'hour-icon',
                    icon: 'far fa-hourglass',
                    title: 'Hour Picker',
                    description: 'Window Date Picker has also hour picker option. You can use hour picker both with and without date picker.'
                },
                {
                    id: 'resp-icon',
                    icon: 'fas fa-mobile-alt',
                    title: 'Responsive',
                    description: 'Window Date Picker is responsive so you can use Window Date Picker on mobile devices.'
                }
            ]
        }
    }

    render() {
        return(
            <section id="features">
                <div className="container">
                    <div className="row">
                        { this.state.items.map(i => {
                            return(<Item key={i.id} item={i} />)
                        })}
                    </div>
                </div>
            </section>
        )
    }
}