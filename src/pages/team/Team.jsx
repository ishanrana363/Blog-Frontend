import React from 'react';

const Team = () => {
    return (
        <div>
            <h1 className="lg:text-4xl font-bold text-center">Meet Our Team</h1>
            <div className="flex lg:flex-row flex-col justify-between my-5 text-center">
                {Array(4).fill(0).map((_, index) => (
                    <div
                        key={index}
                        className="p-10 shadow-md border transform transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            className="w-32 h-32 rounded-full"
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1735129734/team-1_gbptme.avif"
                            alt="Team Member"
                        />
                        <h1 className="my-3">John Doe</h1>
                        <p>CEO</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
