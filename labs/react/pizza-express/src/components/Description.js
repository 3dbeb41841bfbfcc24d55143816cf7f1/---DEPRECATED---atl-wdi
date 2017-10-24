import React, { Component } from "react"
import DescriptionImg from "../images/pizzaoven.jpg"
class Description extends Component{
    render(){
        return(
            <div className="description">
                <img src={DescriptionImg} className="description" />
                <p className="description">Deep v jean shorts tumeric lo-fi. Pabst salvia hammock, neutra before they sold out fingerstache paleo viral flannel mlkshk kombucha echo park crucifix gochujang unicorn. Swag chia umami chillwave scenester. Scenester pop-up you probably haven't heard of them master cleanse. Poutine next level yr trust fund, meditation cloud bread flexitarian narwhal knausgaard schlitz four dollar toast offal put a bird on it lo-fi fanny pack. Literally skateboard migas mumblecore, celiac waistcoat health goth. Humblebrag cred neutra portland chillwave master cleanse keffiyeh copper mug enamel pin hexagon offal. Vape pop-up paleo cliche street art. Next level heirloom gluten-free viral cred. Crucifix ramps edison bulb, blue bottle lo-fi banh mi live-edge. Raw denim fingerstache celiac pug, squid succulents live-edge chillwave kale chips trust fund banjo. Viral air plant synth, beard tousled irony post-ironic chia crucifix iceland roof party waistcoat truffaut tumblr lyft.</p>
            </div>
        )
    }
}

export default Description