import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div className='pa2'>
            <p className='f3 white mr5 ml5'>
                {'I am The Eye. All knowing and all seeing, able to detect any human face within an image. See for yourself.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-3'>
                    <input className='f4 pa2 w-70 center ' type='text' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple '
                        onClick={onButtonSubmit}
                        >Submit to me</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;