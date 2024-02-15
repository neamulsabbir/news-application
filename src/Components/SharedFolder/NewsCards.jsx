export const NewsCards = ({ data, i }) => {
	const { title, description, urlToImage, author } = data;
	return (
		<div className="container mx-auto grid grid-cols-12 gap-8">
			{/* left */}

			<div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
				{i === 1 && (
					<div className="col-span-12 grid grid-cols-12 gap-4">
						{/* <!-- info --> */}
						<div className="col-span-12 lg:col-span-4">
							<a href="#">
								<h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{title}</h3>
							</a>
							<p className="text-base text-[#5C5955]">{description}</p>
							<p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
						</div>
						{/* <!-- thumb --> */}
						<div className="col-span-12 lg:col-span-8">
							<img className="w-full" src={urlToImage} alt="thumb" />
							<p className="mt-5 text-base text-[#5C5955]">{author}</p>
						</div>
					</div>
				)}
				{i === 2 && (
					<>
						<div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
							<div className="col-span-12 md:col-span-6">
								<a href="">
									<h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
								</a>
								<p className="text-base text-[#292219]">{description}</p>
								<p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
							</div>

							<div className="col-span-12 md:col-span-6">
								<img className="w-full" src={urlToImage} alt="thumb" />
							</div>
						</div>

						<div className="col-span-12 md:col-span-6 lg:col-span-4">
							<div className="col-span-12 md:col-span-4">
								<a href="#">
									<h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
								</a>
								<p className="text-base text-[#292219]">{description}</p>
								<p className="mt-5 text-base text-[#94908C]">Yesterday</p>
							</div>
						</div>
					</>
				)}
				{i > 3 && i < 15 && (
					<>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 mt-10">
							<div className="col-span-12 md:col-span-4">
								<a href="#">
									<h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
								</a>
								<p className="text-base text-[#292219]">{description}</p>
								<p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 mt-10">
							<div className="col-span-12 md:col-span-4">
								<a href="#">
									<h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
								</a>
								<p className="text-base text-[#292219]">{description}</p>
								<p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 mt-10">
							<div className="col-span-12 md:col-span-4">
								<a href="#">
									<h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
								</a>
								<p className="text-base text-[#292219]">{description}</p>
								<p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
							</div>
						</div>
					</>
				)}
			</div>
			{/* right */}
			<div className="col-span-12 self-start xl:col-span-4 mt-0 lg:mt-[-1072%] 2xl:mt-[-780%]">
				<div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
					{i === 20 && (
						<div className="col-span-12 mb-6 md:col-span-8">
							<img className="w-full" src={urlToImage} alt="thumb" />

							<div className="col-span-12 mt-6 md:col-span-4">
								<a href="#">
									<h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{title}</h3>
								</a>
								<p className="text-base text-[#292219]">{description}</p>
								<p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
							</div>
						</div>
					)}
					{i > 21 && (
						<div className="col-span-12 md:col-span-8">
							<div className="col-span-12 md:col-span-4">
								<a href="#">
									<h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
										Why is Uber selling its autonomous-vehicle division?
									</h3>
								</a>
								<p className="text-base text-[#292219]">
									Self-driving cars were meant to be its future
								</p>
								<p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
