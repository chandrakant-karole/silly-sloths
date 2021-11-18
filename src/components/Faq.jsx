import React from 'react'
import { Accordion, Container, Row, Col } from 'react-bootstrap'

export default function Faq() {
    return (
        <>
            <div className="faqDiv" id="faq">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="faqHeading my-4">
                                <h2>FAQs (Frequently Asked Questions)</h2>
                            </div>
                        </Col>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What’s an NFT?</Accordion.Header>
                                <Accordion.Body>
                                    An NFT stands for “Non-fungible token” and is a fancy way of saying and identifying a unique, one-of-a kind digital item that users can buy, own, and trade.  Some NFTs main function are to be digital art and look appealing, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of digital art that can also act as a “members” card.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How to get a Silly Sloth? </Accordion.Header>
                                <Accordion.Body>
                                    You will be able to mint Silly Sloths on our website www.SillySloths.com. The mint date is scheduled forDecember 2021.  For those who miss out on the mint, Silly Sloths will be available for purchase on OpenSea, the world’s first and largest NFT marketplace, at: https://opensea.io/.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How much will it cost to mint? </Accordion.Header>
                                <Accordion.Body>
                                    .07 ETH + gas and will be limited to five (5) sloths per transaction during the whitelist presale and 10 sloths per transaction during the public sale.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Will I need Metamask? </Accordion.Header>
                                <Accordion.Body>
                                    Yes, and we recommend minting from a computer with your Metamask wallet.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What blockchain is it on? </Accordion.Header>
                                <Accordion.Body>
                                    It will be on the Ethereum block chain ERC-721 with file hosting on IPFS.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What is Metamask? </Accordion.Header>
                                <Accordion.Body>
                                    Metamask is a crypto wallet that can store your Ethereum, and is needed to purchase and mint a Silly Sloth. Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use by visiting their website. (https://metamask.io/)
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Where does my NFT go after I purchase a Silly Sloth?</Accordion.Header>
                                <Accordion.Body>
                                    Your Silly Sloth NFT will appear in whatever address, or connected wallet you used to purchase the Silly Sloth. You can see your customized Silly Sloth from our website, by clicking My Sloth, or view them on OpenSea (the world’s first and largest NFT marketplace) at: https://opensea.io/.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Will all Silly Sloths be sold? </Accordion.Header>
                                <Accordion.Body>
                                    No, we will hold 100 sloths for promotional purposes.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>What are SUPER Sloths?  </Accordion.Header>
                                <Accordion.Body>
                                    SUPER Sloths cannot be purchased, they must be earned and will be given to those who reach the highest level in the Silly Sloths discord. The SUPER slothholders will be given a daily utility token.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>When will the sloth be the revealed?  </Accordion.Header>
                                <Accordion.Body>
                                    Each Silly Sloth will be revealed 48 hours after the minting ends. Announcements will be made in the discord server in December 2021 with the exact time of reveal.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header>Will Silly Sloths be sold on other platforms? </Accordion.Header>
                                <Accordion.Body>
                                    Eventually, that is the goal. For now, we are focusing on a successful launch onto OpenSea.io. In the future we will be looking into ImmutableX, Solana, Cardano, Avalanche and Coinbase.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="11">
                                <Accordion.Header>Will the Silly Sloths project contribute to charity? </Accordion.Header>
                                <Accordion.Body>
                                    Silly Sloths is looking for organizations to support that are actively fighting against the habitat loss and fragmentation, which is a major threat to sloths.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="12">
                                <Accordion.Header>What kind of giveaways will there be?  </Accordion.Header>
                                <Accordion.Body>
                                    If we successfully sell out, one lucky Silly Sloth holder will win an ALL-EXPENSE paid trip to Costa Rica for two (2) people with adventure tours and a personalized tour of the Sloth Sanctuary and an opportunity to hold a sloth in real life.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="13">
                                <Accordion.Header>How many traits and properties will the sloth variables be made of?  </Accordion.Header>
                                <Accordion.Body>
                                    100 Traits and 8 Properties
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="14">
                                <Accordion.Header>The Silly Sloths NFT project sounds awesome, how do I get involved?</Accordion.Header>
                                <Accordion.Body>
                                    Head over to the Discord, jump in on the conversation, meet fellow future-minded crypto friends and let us know your ideas!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="15">
                                <Accordion.Header>What can I do with my Silly Sloth?</Accordion.Header>
                                <Accordion.Body>
                                    You are free to do anything with them under a non-exclusive license.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="16">
                                <Accordion.Header>Are Silly Sloths a good investment?</Accordion.Header>
                                <Accordion.Body>
                                    That is ultimately a decision for you to make. We believe Silly Sloths have a long life ahead of them, and will be an ever growing and evolving project. However, the success of Silly Sloths relies on so many factors and variables, no one knows! Hopefully Silly Sloths go to the moon, but like anything in life, don’t spend money you can’t afford to not have.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="17">
                                <Accordion.Header>What are our values at Silly Sloths?</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><strong>Diversity</strong> – Celebrating a worldwide diverse community with differing levels of knowledge and excitement about the crypto and blockchain world.</li>
                                        <li><strong>Inclusion</strong> – Valuing all the unique talents we bring to the table as individuals and a community. </li>
                                        <li><strong>Community</strong> – Being a safe space to express your NFT and Cryptocurrency passion with like-minded individuals who understand the fun and future of blockchain technology.</li>
                                        <li><strong>Fun</strong> – Keeping things engaging and exciting all day every day since the community runs 24/7 as a worldwide network and community. </li>
                                        <li><strong>Education</strong> – Be an educational space for all things NFTs as we learn and grow the blockchain space. </li>
                                        <li><strong>Think tank</strong> – Providing a space for collaboration of ideas and future projects.</li>
                                        <li><strong>Art</strong> – Embracing the artistic digital revolution we’re about to experience worldwide.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="18">
                                <Accordion.Header>How silly will my sloth be?</Accordion.Header>
                                <Accordion.Body>
                                    Remember – all sloths are silly, one-of-a kind digital creatures! That said, each Silly Sloth will have a rarity factor, depending on the randomization of artistic components, which make up their final silly style and look. The one-of-a-kind digital creature is determined by the random configuration of items your Silly Sloth is made up of from hats to color schemes to items held in your unique sloth’s hand.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="19">
                                <Accordion.Header>How silly will my sloth be?</Accordion.Header>
                                <Accordion.Body>
                                    Remember – all sloths are silly, one-of-a kind digital creatures! That said, each Silly Sloth will have a rarity factor, depending on the randomization of artistic components, which make up their final silly style and look. The one-of-a-kind digital creature is determined by the random configuration of items your Silly Sloth is made up of from hats to color schemes to items held in your unique sloth’s hand.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="20">
                                <Accordion.Header>Why get a Silly Sloth?</Accordion.Header>
                                <Accordion.Body>
                                    You get to participate in the rapidly growing crypto world with one of the most fun, curated but randomized NFT projects to date and you get an eye-catching profile picture while you are at it. You can also help us evolve and build the future of Silly Sloths. We are reserving 200 Sloths to give back to the community (through contests, raffles, and more) – because we genuinely want Silly Sloths to be a fun project that fosters belonging and community. By getting a Silly Sloth you have a voice in the community and can help guide the direction of the project. We’ll ask for input and ideas to keep the Silly Sloths community engaging and creative.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="21">
                                <Accordion.Header>Cost of $illy $loths</Accordion.Header>
                                <Accordion.Body>
                                    = $0.07 ETH
                                    Silly Sloths are priced at a flat rate ($0.07ETH)
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="22">
                                <Accordion.Header>Future of Silly Sloths?</Accordion.Header>
                                <Accordion.Body>
                                    Silly Sloths are much more than an NFT art project. We have plans and hopes to build a Silly Sloths community built on interactivity and utility, individual and group rewards, collaboration, and personal and financial growth opportunities, and much more!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                </Container>
            </div>
        </>
    )
}
