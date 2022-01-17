import React from 'react'
// import Dummy from '../assets/images/dummy.jpg'
import { Container, Row } from 'react-bootstrap'

export default function Roadmap() {
    return (
        <>
            <div className="roadMapDiv" id="roadMap">
                <Container>
                    <Row>
                        <div className="roadMap_container">
                            <h2>THE SILLY SLOTH ROADMAP</h2>
                            <p>There will be a white list created for a pre-sale event and then it will be opened up for a public sale. The minting process will take place on the Silly Sloths website and connect to OpenSea.io. The initial images that show up on OpenSea will be a generic image. Once all 9,950 Silly Sloths are purchased, a reveal event will happen. At that point, if all 9,950 Silly Sloths are sold, the NFTs will be replaced with unique randomly generated Silly Sloths.</p>
                            <div className="roadMap_phase">
                                <div className="roadMap_phase_img">
                                </div>
                                <div className="roadMap_phase_content">
                                    <h3>PHASE 1 – Pre-Mint</h3>
                                    <ul>
                                        <li>• Website launch </li>
                                        <li>• Community building in Discord </li>
                                        <li>• Organic growth </li>
                                        <li>• Weekly contest will be used to level up members </li>
                                        <li>• Reward level 4 members with whitelist access </li>
                                        <li>• Leading up to the whitelist pre-sale, we’ll begin activating influencer marketing </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadMap_phase">
                                <div className="roadMap_phase_img">
                                </div>
                                <div className="roadMap_phase_content">
                                    <h3>PHASE 2 – Mint </h3>
                                    <ul>
                                        <li>• Whitelist Pre-Sale – Whitelist members will have 24 hours to mint an NFT or NFTs up to the maximum allowed per person. (21th January) </li>
                                        <li>• Public Sale – Public sale may be stealth to avoid gas wars with 9,950 up for grabs. 50 Silly Sloths will be held for promotional purposes, contests, and raffles to reward members who become more involved in the Silly Sloths community sharing ideas, solving riddles, and winning contests. (22th January)</li>
                                        <li>• Reveal – Each Silly sloth will be revealed 48 hours after the public sale and all Silly Sloths are sold out. </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadMap_phase">
                                <div className="roadMap_phase_img">
                                </div>
                                <div className="roadMap_phase_content">
                                    <h3>PHASE 3 – Growth </h3>
                                    <ul>
                                        <li>•	Utility Token – Development of a utility token that’ll be distributed to all sloths.</li>
                                        <li>•	Marketing – A fully baked marketing and communication plan will be put into action. The marketing will include press releases, partnerships, working with influence's and more. </li>
                                        <li>•	Charity – We firmly believe in charity and will be working to identify partners that are actively fighting against habitat loss and fragmentation, which is a major threat to sloths.</li>
                                        <li>•	Grand Prize – One lucky Silly Sloth owner will win an all-expense paid trip for 2 people to Costa Rica, where sloths most common natural habitat exists.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
