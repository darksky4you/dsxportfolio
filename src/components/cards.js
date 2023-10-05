import React from 'react'
import './css/cards.css'
import { Link } from 'react-router-dom'

const cards = () => {
    return (
        <div className='card-container'>
            <div className="card">
                <div className="content">
                    <p className="heading">NewbieUI | Cattail.
                    </p><p className="para">
                    It's a APLHA build for Redmi 9 (Cattail) and It's patched with MIUI 13's features. Thats why this rom is havvy for Redmi 9. The changes are posted in the rom post.
                    </p>
                    <Link to='https://t.me/ds_x_newbie' className="btn">Read more</Link>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <p className="heading">NewbieUI | Dandelion.
                    </p><p className="para">
                        It's a APLHA build for Redmi 9a (Dandelion) and It's patched with MIUI 13's features. Thats why this rom is havvy for Redmi 9a. The changes are posted in the rom post.
                    </p>
                    <Link to='https://t.me/ds_x_newbie' className="btn">Read more</Link>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <p className="heading">MIUISC | Merlinx.
                    </p><p className="para">
                    It's a APLHA build for Redmi Note 9 (Merlinx) and It's patched with MIUI 14's features. The rom is tweaked for Redmi Note 9. The changes are posted in the rom post.
                    </p>
                    <Link to='https://t.me/ds_x_newbie' className="btn">Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default cards