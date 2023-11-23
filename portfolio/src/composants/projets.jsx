import React from "react";
import { GiVineLeaf } from "react-icons/gi";
import { DiGithubBadge } from "react-icons/di";
import { BsPlayCircle } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TbCrystalBall } from "react-icons/tb";
import {LuScanFace} from "react-icons/lu";
import { IoAnalyticsSharp } from "react-icons/io5";

const Projets = () => {
    
    return (
        <div className="containerProject" id="projects">
            <h1 className="title-project">Web projects</h1>
            <div className="grid">
                <div class="card">
                    <div class="project-icon">
                        <FaUsers />
                    </div>
		            <div class="text">
			            <h1 class="project-title">Social network</h1>
			            <p class="subtitle">Made with PHP, MySQL database, HTML and CSS</p>
		            </div>
		        <div class="icons">
			        <a class="btn" href="https://github.com/MargotHuet/reseau-social-php">
				        <DiGithubBadge />
			        </a>
			        <a class="btn" href="#">
			            <BsPlayCircle />
			        </a>
		        </div>
	        </div>
            <div class="card">
                    <div class="project-icon">
                        <TbCrystalBall />
                    </div>
		            <div class="text">
			            <h1 class="project-title">Ikeada</h1>
			            <p class="subtitle">Website made with NodeJS, Supabase, ExpressJS, ReactJS, HTML and CSS.</p>
		            </div>
		        <div class="icons">
			        <a class="btn" href="https://github.com/MargotHuet/Ikeada-website">
				        <DiGithubBadge />
			        </a>
			        <a class="btn" href="#">
			            <BsPlayCircle />
			        </a>
		        </div>
	        </div>
            <div class="card">
                    <div class="project-icon">
                        <GiVineLeaf />
                    </div>
		            <div class="text">
			            <h1 class="project-title">Ampelos WebApp</h1>
			            <p class="subtitle">Made with FastAPI. Project that uses Ampelos CNN Model</p>
		            </div>
		        <div class="icons">
			        <a class="btn" href="https://github.com/MargotHuet/Ampelos-CNN-model/tree/master">
				        <DiGithubBadge />
			        </a>
			        <a class="btn" href="#">
			            <BsPlayCircle />
			        </a>
		        </div>
	        </div>
            </div>
                
            <h1 className="title-project">Data/AI projects</h1>
            <br></br>
            <div class="grid">
            <div class="card">
                    <div class="project-icon">
                        <GiVineLeaf />
                    </div>
		            <div class="text">
			            <h1 class="project-title">Ampelos</h1>
			            <p class="subtitle">CNN Model</p>
		            </div>
		        <div class="icons">
			        <a class="btn" href="https://github.com/MargotHuet/Ampelos-CNN-model/blob/master/Ampelos.ipynb">
				        <DiGithubBadge />
			        </a>
			        <a class="btn" href="#">
			            <BsPlayCircle />
			        </a>
		        </div>
	        </div>
            <div class="card">
                    <div class="project-icon">
                        <IoAnalyticsSharp />
                    </div>
		            <div class="text">
			            <h1 class="project-title">Analyse sentiment</h1>
			            <p class="subtitle">Analysis tool that helps understanding user's feelings.</p>
		            </div>
		        <div class="icons">
			        <a class="btn" href="https://github.com/MargotHuet/Text_analysis">
				        <DiGithubBadge />
			        </a>
			        <a class="btn" href="#">
			            <BsPlayCircle />
			        </a>
		        </div>
	        </div>
            <div class="card">
                    <div class="project-icon">
                        <LuScanFace />
                    </div>
		            <div class="text">
			            <h1 class="project-title">Face app detection</h1>
			            <p class="subtitle">Program that uses Haar Casscade Classifier</p>
		            </div>
		        <div class="icons">
			        <a class="btn" href="https://github.com/MargotHuet/Face_detection_app">
				        <DiGithubBadge />
			        </a>
			        <a class="btn" href="#">
			            <BsPlayCircle />
			        </a>
		        </div>
	        </div>
        </div>
        </div>
            
        
    )
}

export default Projets;