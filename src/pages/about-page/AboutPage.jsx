import React, { useContext } from 'react'
import Team from '../team/Team'
import SignUpForm from '../home-pages/SignUpFrom'
import { ThemeUserContext } from '../../context/ThemeContext';

const AboutPage = () => {
    const { drakMode, setIsDrakMode } = useContext(ThemeUserContext);
    console.log("drak mode is", drakMode);
    return (
        <div className='py-10' >
            <div className='w-11/12 mx-auto ' >
                <h1 className='mt-5 text-center lg:text-3xl font-bold mb-10 ' >About Us</h1>
                <p className='font-bold text-[17px] mb-7 text-justify ' >Learn more about our company, our mission, and the team that drives us forward. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam libero obcaecati. Earum veniam debitis, repellendus omnis fugit sequi. Quia quaerat voluptatem, dolores vel officiis nulla corrupti nemo dolorem omnis?</p>
                <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-8 gap-6 ' >
                    {/* text  */}
                    <div>
                        <h1 className='lg:text-3xl font-bold mb-4 ' >Our Mission</h1>
                        <p className='text-justify' > We are dedicated to providing the best solutions for our customers by focusing on quality, innovation, and customer satisfaction. Our mission is to help you succeed in the digital age by delivering reliable and impactful digital products and services. <br /> <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla porro minima qui facilis ipsam molestiae sint mollitia facere ullam fugit, tenetur sunt ducimus debitis dolorem iusto blanditiis consequuntur maxime!

                        </p>
                    </div>
                    {/* image  */}
                    <div>
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1735129734/about-img-2_e265jz.avif" alt="" />
                    </div>
                </div>


                <div className='flex flex-col lg:flex-row-reverse justify-between items-center lg:gap-8 gap-6 mt-9 ' >
                    {/* text  */}
                    <div>
                        <h1 className='lg:text-3xl font-bold mb-4 ' >Our Vission</h1>
                        <p className='text-justify' > We are dedicated to providing the best solutions for our customers by focusing on quality, innovation, and customer satisfaction. Our mission is to help you succeed in the digital age by delivering reliable and impactful digital products and services. <br /> <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla porro minima qui facilis ipsam molestiae sint mollitia facere ullam fugit, tenetur sunt ducimus debitis dolorem iusto blanditiis consequuntur maxime!

                        </p>
                    </div>
                    {/* image  */}
                    <div>
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1735129734/about-img-2_e265jz.avif" alt="" />
                    </div>
                </div>

                <div className='mt-10' >
                    <Team></Team>
                </div>

                <div className='mt-10' >
                    <SignUpForm></SignUpForm>
                </div>
            </div>

        </div>
    )
}

export default AboutPage
