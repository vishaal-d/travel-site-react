import React from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import  {HiOutlineLocationMarker} from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

//data

const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle:'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees:'$700',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque excepturi vero eos accusantium tempora. Aspernatur numquam incidunt.'
  },

  // {
  //   id:2,
  //   imgSrc: img,
  //   destTitle:'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque excepturi vero eos accusantium tempora. Aspernatur numquam incidunt eaque ipsum distinctio adipisci quos tempora voluptates.'
  // },

  // {
  //   id:3,
  //   imgSrc: img,
  //   destTitle:'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque excepturi vero eos accusantium tempora. Aspernatur numquam incidunt eaque ipsum distinctio adipisci quos tempora voluptates.'
  // },

  // {
  //   id:4,
  //   imgSrc: img,
  //   destTitle:'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque excepturi vero eos accusantium tempora. Aspernatur numquam incidunt eaque ipsum distinctio adipisci quos tempora voluptates.'
  // },

  // {
  //   id:5,
  //   imgSrc: img,
  //   destTitle:'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque excepturi vero eos accusantium tempora. Aspernatur numquam incidunt eaque ipsum distinctio adipisci quos tempora voluptates.'
  // },

  // {
  //   id:6,
  //   imgSrc: img,
  //   destTitle:'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque excepturi vero eos accusantium tempora. Aspernatur numquam incidunt eaque ipsum distinctio adipisci quos tempora voluptates.'
  // },

  // {
  //   id:7,
  //   imgSrc: img,
  //   destTitle:'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque excepturi vero eos accusantium tempora. Aspernatur numquam incidunt eaque ipsum distinctio adipisci quos tempora voluptates.'
  // },

  // {
  //   id:8,
  //   imgSrc: img,
  //   destTitle:'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque excepturi vero eos accusantium tempora. Aspernatur numquam incidunt eaque ipsum distinctio adipisci quos tempora voluptates.'
  // },

  // {
  //   id:9,
  //   imgSrc: img,
  //   destTitle:'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees:'$700',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque excepturi vero eos accusantium tempora. Aspernatur numquam incidunt eaque ipsum distinctio adipisci quos tempora voluptates.'
  // },
]

const Main = () => {
  return (
    <section className='main container section'>
          <div className="secTitle">
            <h3 className="title">
              Most visited destinations
            </h3>
          </div>

          <div className="secContent grid">
              {
                Data.map(({id,imgSrc, destTitle,location,grade,fees,description})=>{
                  return( 
                    <div key={id} className="singleDestination">
                      <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                      </div>

                      <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                        <span className="continent flex">
                          <HiOutlineLocationMarker className='icon'/>
                          <span className="name">{location}</span>
                        </span>

                        <div className="fees flex">
                          <div className="grade">
                            <span>{grade}<small>+1</small></span>
                          </div>
                          <div className="price">
                            <h5>{fees}</h5>
                          </div>
                        </div>

                        <div className="desc">
                          <p>{description}</p>
                        </div>

                        <button className="btn flex">
                          DETAILS <HiOutlineClipboardCheck className='icon'/>
                        </button>
                      </div>
                    </div>
                  )
                })
              }
          </div>
    </section>
  )
}

export default Main