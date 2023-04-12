type SponsorGalleryProps = {
    sponsors: any;
}

const SponsorGallery = ({ sponsors }: SponsorGalleryProps) => {
    return (
        <section className="home-sponsor-grid">
            {sponsors.map((sponsor: any, index: any) => {
                return (
                    <img key={index} src={`/sponsors/${sponsor}`} alt="Sponsor"/>
                )
            })}
        </section>
    );
}

export default SponsorGallery