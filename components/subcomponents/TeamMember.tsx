type TeamMemberProps = {
    name: String,
    role: String,
    image: any,
}

const TeamMember = ({
    name,
    role,
    image
}: TeamMemberProps) => {
    return (
        <div className="team-member">
            <img src={image} alt="Team Member" className="team-member-image" />
            <p className="team-member-name">{name}</p>
            <p className="team-member-role">{role}</p>
        </div>
    )
}

export default TeamMember