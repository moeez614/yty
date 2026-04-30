import React from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'
import { useState, useEffect } from 'react'

const Googlemap = () => {
    const navigate = useNavigate()
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const timmer = setTimeout(() => {
            setloading(false)
        }, 800)
        return () => clearTimeout(timmer)
    }, [])
    
    if(loading){
        return <Loader />
    }
    return (
        <div>
            <h4 className='back-home' onClick={() => {
                navigate(-1)
            }}>
                <i class="fa-solid fa-arrow-left"></i>
                Go back
                </h4>

            <div className='parchar'>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13451.521215676858!2d72.68500430271222!3d31.16381401384563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39230005c78125a1%3A0xdfd2f7fd4baa19c6!2sPunjab%20College%20Gojra!5e1!3m2!1sen!2s!4v1774452082175!5m2!1sen!2s"
                    className='map-edits'
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d526.0567679314637!2d72.69970725226555!3d31.161891806525627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39230005c78125a1%3A0xdfd2f7fd4baa19c6!2sPunjab%20College%20Gojra!5e1!3m2!1sen!2s!4v1774452609623!5m2!1sen!2s" className='map-edits' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Googlemap
