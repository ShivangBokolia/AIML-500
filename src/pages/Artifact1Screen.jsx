import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { artifacts } from "../constants/constants";

const artifact = artifacts[0];

const Artifact1Screen = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="flex min-h-screen pt-16 bg-background-green">
                <aside className="lg:w-1/3 xl:w-1/4 h-screen text-white p-8 flex flex-col justify-center relative overflow-hidden shrink-0 border-r border-nav">
                    <div className="relative z-10">
                        <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-2 block">
                            Artifact 1
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {artifact.name}
                        </h2>
                        <p className="text-brand-light/70 text-sm mb-8 leading-relaxed">
                            {artifact.definition}
                        </p>
                        <div className="space-y-3">
                            <button
                                className="w-full p-2 cursor-pointer rounded-full from-[#0C1B1D] to-highlight bg-gradient-to-r shadow-2xl"
                                onClick={() =>
                                    window.open(artifact.source_link, "_blank")
                                }
                            >
                                Visit Live Project
                            </button>
                        </div>
                    </div>
                </aside>
                <div className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
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
                            <ul className="overflow-y-auto max-h-72">
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

export default Artifact1Screen;
