import React, {Component} from 'react'
import styled from 'styled-components'

const SliderBox = styled.div`
    height: 500px;
    width: 320px;
    background-color: #CCE6F4;
    position: absolute;
    z-index: 2;
`

class SignUpLoginSlider extends Component {

    render() {
        return (
            <SliderBox></SliderBox>
        )
    }
}

export default SignUpLoginSlider