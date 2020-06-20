import React from 'react'
import './BodyContent.css'


const TextH2 = (props) => {

    const { page } = props;

    let bodyPage = ''

    const bodyPage1 = <p className="BodyContent">
        Attraverso il riconoscimento vocale questa applicazione ti consentirà di {"\n"}
        <span style={{ color: '#f9bc60' }}>ordinare la pizza</span> {"\n"}
        in base ai tuoi gusti e preferenze.
    </p>

    const bodyPage2 = <p className="BodyContent">Attiva il microfono premendo il pulsante sotto...</p>

    const bodyPage3 = <p className="BodyContent">
        Prova a dire{"\n"}
        <span style={{ color: '#f9bc60' }}>tonno</span> o {"\n"}
        <span style={{ color: '#f9bc60' }}>capperi</span> o {"\n"}
        <span style={{ color: '#f9bc60' }}>cipolla</span> o {"\n"}
        <span style={{ color: '#f9bc60' }}>gamberetti</span>...{"\n"}
        O qualsiasi altro gusto che interessa...
    </p>


    switch (page) {
        case 1:
            bodyPage = bodyPage1
            break;
        case 2:
            bodyPage = bodyPage2
            break;
        case 3:
            bodyPage = bodyPage3
            break;
        default:
            break;
    }


    return bodyPage
}

export default TextH2;