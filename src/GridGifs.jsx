// export const GridGifs = (gifs) => {
//     return (
//         <>
//             {
//                 gifs.map(gif => (
//                     <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
//                 ))
//             }
//         </>
//     )
// }

import React from 'react'

const GridGifs = ({ gifs }) => {
    return (
        <div>
            {
                gifs.map(gif => (
                    <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
                ))
            }
        </div>
    )
}

export default GridGifs