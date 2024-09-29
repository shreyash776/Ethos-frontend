import FaceInformation from "../../utils/faceInformation";

const facesDetected = [
    {
        id: 'face1',
        faceImageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        faceDepth: 10,
        objFile: "face1.obj",
    },
    {
        id: 'face2',
        faceImageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        faceDepth: 10,
        objFile: "face1.obj",
    }
]

const DashboardPage = () => {
    return (
        <div className="flex flex-col bg-gray-950 h-screen">
            <div className="mt-14">

                <section className="h-full">

                    <div className="grid grid-cols-2">

                        <div className="border-r-2 border-black h-full">
                            <div className="text-white">
                                Video Player (using Canvas)
                            </div>
                        </div>



                        <div className="text-white">
                            <FaceInformation facesDetected={facesDetected} />
                        </div>

                    </div>

                </section>




            </div>
        </div>
    )
}

export default DashboardPage;