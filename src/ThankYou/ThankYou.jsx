import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
    CardsContainer,
    PlanSummaryCard,
    GreenTickCard,
    AppStoreNextBestActionCard
} from '@origin-digital/card';
import {
    BREAK_POINTS,
    ThankYouBanner,
    Colors
} from '@origin-digital/style-guide';

const Divider = styled.div`
    margin-bottom: 8px;
`;

const SmallDivider = styled.div`
    margin-bottom: 1px;
`;


const Page = styled.div`
    background-color: ${Colors.GREY8};
    min-height: 100vh;
    padding-bottom: 60px;
`;
const Offset = styled.div`
    margin-top: -32px;
    @media only screen and (min-width: ${BREAK_POINTS.Min.LG}) {
        margin-top: -64px;
    }
`;

export const ThankYou = ({ formData }) => {
    const { firstName } = formData;

    return (
        <Page>
            <ThankYouBanner />
            <Offset>
                <CardsContainer>
                    <GreenTickCard message={`Thanks ${firstName}!`} />
                    <Divider />
                    <AppStoreNextBestActionCard
                        planName={'Bill Saver'}
                        isDigitalPlan={false}
                        showAppLinks={false}
                    />
                    <SmallDivider />
                    <PlanSummaryCard
                        referenceNumber="REF12345"
                        plan="Bill Saver"
                        fuelTypes={{
                            ELECTRICITY: true,
                            NATURAL_GAS: true
                        }}
                    />
                    <Divider />
                    
                </CardsContainer>
            </Offset>
        </Page>
    );
};

ThankYou.propTypes = {
    values: PropTypes.object
};

