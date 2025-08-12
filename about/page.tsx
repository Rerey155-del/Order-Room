import { Metadata } from "next"

import Image from "next/image"
import HeaderSection from "@/components/header-section"
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5"

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about our company and values."
}

const AboutPage = () => {

    return (
        <div>
            <HeaderSection title="About Us" subTitle="Lorem ipsum dolor sit amet" />
            <div className="max-w-screen-xl mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image src="/about-image.jpg" alt="About Us" width={600} height={579} />
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-900 mb-4">Who we are</h1>
                        <p className="text-gray-700 py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos non incidunt magnam.</p>
                        <ul className="list-item space-y-6 pt-8">
                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoEyeOutline className="size-7"></IoEyeOutline>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                                    <p className="text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum deserunt earum.</p>
                                </div>
                            </li>
                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoLocateOutline className="size-7"></IoLocateOutline>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                                    <p className="text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos natus hic dolore! Vero hic earum adipisci ullam placeat? Repellat alias distinctio aliquam consequuntur explicabo veniam quidem temporibus maiores saepe?</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage