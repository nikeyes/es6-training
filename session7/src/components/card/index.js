import {Image, Div, Text} from '../html';
import HtmlComponent from '../html/HtmlComponent';

class Card extends HtmlComponent {
    constructor({name, image} = {}) {
        super({name, image});
        this._name = name;
        this._image = image;
    }

    render() {
        const card = new Div('Card');
        const cardContent = new  Div('Card-content');
        const title = new Div('Card-title');
        const image = new Image({className: 'Card-image', src: this._image});
        const name = new Text({text: this._name});

        title.appendChild(name);
        cardContent.appendChild(title);
        card.appendChild(image);
        card.appendChild(cardContent);

        return card.render();
    }
};

