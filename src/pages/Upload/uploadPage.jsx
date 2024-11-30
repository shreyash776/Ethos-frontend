import UploadVideo from '../../components/UploadVideo';

const UploadPage = () => {
	return (
		<div className="h-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Upload a Video
					</h1>
					<p className="mt-4 text-xl text-gray-600">
						Upload a video to see how our Face Reconstruction works
					</p>
				</div>
				<div className="bg-white shadow-md rounded-lg overflow-hidden">
					<UploadVideo />
				</div>
			</div>
		</div>
	);
};

export default UploadPage;

