import transcript1 from "./../assets/img/transcript1.jpg";
import transcript2 from "./../assets/img/transcript2.jpg";
import transcript3 from "./../assets/img/transcript3.jpg";
import bg from "./../assets/img/bgimgs.png";


export const Transcript = () => {
    return (
        <section className="transcript-section">
            <div className="container">
                <h2 className="title">Transcripts</h2>
                <div className="transcript-gallery">
                    <img src={transcript1} alt="Transcript 1" className="transcript-img" />
                    <img src={transcript2} alt="Transcript 2" className="transcript-img" />
                    <img src={transcript3} alt="Transcript 3" className="transcript-img" />
                </div>
            </div>
        </section>
    );
};

