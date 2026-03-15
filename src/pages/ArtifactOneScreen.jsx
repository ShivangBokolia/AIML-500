import React from "react";
import Navbar from "../components/Navbar";
import { artifacts } from "../constants/constants";
import { CoursePilot } from "../assets";

const artifact = artifacts[0];

const ArtifactOneScreen = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="w-full min-h-screen pt-48 bg-radial-[at_200%_40%] from-[#2d737b] via-background-green via-60% to-background-green">
                {/* Hero */}
                <div className="hidden md:flex flex-row justify-between px-24 lg:px-48 gap-4">
                    <div className="flex flex-col items-center text-white pb-8 justify-center">
                        <span className="font-semibold tracking-widest uppercase text-xs mb-2 block">
                            Artifact 1
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {artifact.name}
                        </h2>
                        <button
                            className="md:w-96 w-full p-2 cursor-pointer rounded-full from-[#0C1B1D] to-highlight bg-gradient-to-r shadow-2xl"
                            onClick={() =>
                                window.open(artifact.source_link, "_blank")
                            }
                        >
                            Visit Live Project
                        </button>
                    </div>
                    <img src={CoursePilot} className="sm:w-64 rounded-3xl" />
                </div>
                {/*################ MOBILE ################ */}
                <div className="flex md:hidden flex-col justify-between gap-4 px-4 items-center">
                    <div className="flex flex-col items-center text-white pb-8 justify-center">
                        <span className="font-semibold tracking-widest uppercase text-xs mb-2 block">
                            Artifact 1
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {artifact.name}
                        </h2>
                        <button
                            className="md:w-96 w-full p-2 cursor-pointer rounded-full from-[#0C1B1D] to-highlight bg-gradient-to-r shadow-2xl"
                            onClick={() =>
                                window.open(artifact.source_link, "_blank")
                            }
                        >
                            Visit Live Project
                        </button>
                    </div>
                    <img src={CoursePilot} className="sm:w-64 rounded-3xl" />
                </div>

                {/* REST OF THE BODY */}
                <div className="flex-grow p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden">
                    <div className="bg-white/15 p-4 rounded-xl flex flex-col gap-8">
                        <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-xl text-white">
                                Objective
                            </h5>
                            <p className="text-nav">{artifact.objective}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-xl text-white">
                                Tools Used
                            </h5>
                            <p className="text-nav">{artifact.tools}</p>
                        </div>
                    </div>
                    <div className="bg-white/15 p-4 rounded-xl">
                        <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-xl text-white">
                                Value Proposition
                            </h5>
                            <p className="text-nav">
                                {artifact.value_proposition}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/15 p-4 rounded-xl sm:col-span-2">
                        <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-xl text-white">
                                Process
                            </h5>
                            <ul>
                                {artifact.process.map((process, idx) => (
                                    <li className="text-nav pb-2" key={idx}>
                                        {process}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtifactOneScreen;
