import React from "react";
import { Heading3 } from '@origin-digital/style-guide';
import { PlanConfirmationCard } from '@origin-digital/plans';
import Container from "@material-ui/core/Container";
import InputForm from ".";

export const Step3 = props => {
  return (
    <InputForm
      values={props.values}
      currentStep={props.currentStep}
      onNextStep={props.onNextStep}
      onPrevStep={props.onPrevStep}
      render={({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
      }) => (
        <Container maxWidth="md">
          <Heading3 align="center">Please review the plan you have selected</Heading3>
          <PlanConfirmationCard
            plans={plansData}
            seeAllPlanDetailsAccordionsDisabled
          />
        </Container>)
      }
    />
  );
};

const plansData = [
  {
    businessAgreementId: '200013783945',
    contractId: '1001419090',
    divisionId: '01',
    productCode: 'ELE_DSAVE_0001',
    description: 'Solar Boost',
    contractStartDate: 1533859200000,
    contractEndDate: 1565308800000,
    nextMeterReadDate: 1556236800000,
    discountPercentage: 10,
    tacticalDiscountPercentage: 4,
    potDiscountPercentage: 0,
    discountType: 'USAGE_AND_SUPPLY',
    greenPercentage: '0.25',
    billDeliveryMethodID: 'LET',
    productChangeAllowed: true,
    isPredictableProduct: false,
    solarBoostTariff: '0.15',
    status: 'In Progress',
    paymentInfo: {
      paymentMethodId: 'D',
      bankAccountId: '0001',
      paymentCardId: ''
    },
    tariff: [
      {
        categoryId: 'ERV-GD',
        description: 'General Domestic',
        serviceProviderId: 'POWCPLNSP',
        serviceProviderName: 'Powercor',
        timeOfUsage: '',
        rates: [
          {
            description: 'Peak Usage',
            band: '0',
            startValue: '0',
            endValue: '0',
            includingGst: 26.4,
            excludingGst: 24,
            discountIncludingGst: 26.4,
            discountExcludingGst: 24,
            uomid: 'kWh'
          },
          {
            description: 'Dedicated Circuit - All Usage',
            band: '0',
            startValue: '0',
            endValue: '0',
            includingGst: 16.115,
            excludingGst: 14.65,
            discountIncludingGst: 16.115,
            discountExcludingGst: 14.65,
            uomid: 'kWh'
          },
          {
            description: 'Daily Supply Charge',
            band: '0',
            startValue: '0',
            endValue: '0',
            includingGst: 144.122,
            excludingGst: 131.02,
            discountIncludingGst: 144.122,
            discountExcludingGst: 131.02,
            uomid: 'day'
          }
        ]
      }
    ],
    energyCost: {
      custom: {
        '0': {
          approxCharge: 1501.38,
          extraCost: '0 c/kwh',
          extraUnit: '',
          estimatedCharge: '3833 kWh / yearly'
        },
        '25': {
          approxCharge: 1605.37,
          extraCost: '$2/wk - 25%',
          extraUnit: '',
          estimatedCharge: '3833 kWh / yearly',
          refRule: 'DMO',
          refPercentSaving: 67.1,
          refTariffType: 'Flat',
          refType: 'Usage'
        },
        '50': {
          approxCharge: 1609.08,
          extraCost: '2.81 c/kwh',
          extraUnit: '',
          estimatedCharge: '3833 kWh / yearly'
        },
        '100': {
          approxCharge: 1716.41,
          extraCost: '5.61 c/kwh',
          extraUnit: '',
          estimatedCharge: '3833 kWh / yearly'
        }
      }
    },
    discountText:
      '14% + 11% bonus discount when you sign up electricity and natural gas together',
    totalCost: 68.03,
    houseSize: '0',
    productId: null,
    campaignId: 'C-00036387',
    title: 'Bill Saver',
    tagLine: null,
    bonusOffer: null,
    dualFuelBonusOffer: null,
    benefitPeriod: null,
    exitFees: null,
    accountManagement: null,
    termsAndConditions: null,
    termsAndConditionsUrl:
      'https://staticsite-router-staging.origindigital-pac.com.au/terms-and-conditions/low-rate-plan-terms-and-conditions.html',
    displayColour: 'blue',
    chargesDiscountCopy: null,
    primaryDisplayFeatures: [
      {
        title: 'Flexible payment options',
        description:
          '<p>Choose from a range of payment options available to best meet your needs.<br>\\n</p>\\n',
        icon: 'direct-debit'
      },
      {
        title: 'eBilling and eCorrespondence available',
        description:
          '<p>Choose how you\'d like to receive your bills and correspondence from us.<br>\\n</p>\\n',
        icon: 'padlock'
      }
    ],
    secondaryDisplayFeatures: [
      {
        title: 'No exit fees or lock-in contracts',
        description:
          '<p>No exit fee or lock-in contract will apply to you if you leave this plan before the benefit period ends.<br>\\n</p>\\n',
        icon: 'padlock'
      },
      {
        title: 'Benefit period',
        description:
          '<p>Your plan&#39;s discount will apply for 12 or 24 months from the supply start date.<br>\\n\\n\\n</p>\\n<p>\\n</p>\\n<p>\\n</p>\\n<p>\\n</p>\\n',
        icon: 'calendar'
      },
      {
        title: '24/7 Online account management',
        description:
          '<p>You can manage your account and check your usage online 24/7 using My Account.<br>\\n</p>\\n',
        icon: 'house-sans-circle'
      },
      {
        title: 'Frequently asked questions',
        description: `<p><b>How is this plan different from the others?<br>\\n</b>With Origin Saver, we reward you with pay-on-time discounts when you pay your bills by the due date.</p>\\n<p><b>What are the payment options available to me?<br>\\n</b>Simply pay your bills the way you want - by direct debit with your chosen credit/debit card or bank account or manually. You can also choose to receive your bills and correspondence by emails or post.</p>\\n<p><b>What about my concessions/rebates?<br>\\n</b>The approximate monthly charges you see above don't include any concessions or rebates that may apply to you. See&nbsp;<a href=\\"https://www.originenergy.com.au/for-home/electricity-and-gas/pricing/concessions-rebates.html\\">Concessions and rebates</a>&nbsp;to check whether you're eligible for a state-government concession or rebate.</p>\\n<p><b>What if I change my mind after I sign up to this plan?<br>\\n</b>No problem. We don't have lock-in contracts on our residential plans, so you can exit any time before the benefit period finishes without paying any exit fees.</p>\\n<p><b>Should I look at rates or discounts when I switch energy providers?<br>\\n</b>Big upfront discounts don't always mean big savings. Compare Origin's competitive rates with your current provider to see what you could save.</p>\\n`,
        icon: 'question'
      },
      {
        title: 'Salesform - Pricing special offer copy',
        description: 'No exit fees or lock-in contracts',
        icon: 'cold'
      }
    ],
    isDirectDebitMandatory: true,
    isEmailBillingMandatory: false,
    isEmailCorrespondenceMandatory: false,
    priceAttributes: [
      {
        contractId: '1001419090',
        priceType: 'CONCESSION',
        sequenceNo: '1',
        description: 'Pensioners',
        price: '0.78082200',
        unitOfMeasure: 'c/day',
        blockFrom: '0',
        blockTo: '0'
      },
      {
        contractId: '1001419090',
        priceType: 'CONCESSION',
        sequenceNo: '1',
        description: 'DVA Gold Card',
        price: '0.17500000',
        unitOfMeasure: '%',
        blockFrom: '0',
        blockTo: '0'
      },
      {
        contractId: '1001419090',
        priceType: 'SOLARFIT',
        sequenceNo: '2',
        description: 'Solar FIT',
        price: '0.15000000',
        unitOfMeasure: 'c/kWh',
        blockFrom: '0',
        blockTo: '0'
      }
    ]
  },
  {
    businessAgreementId: '200013783946',
    contractId: '1001419090',
    divisionId: '02',
    productCode: 'ELE_DSAVE_0001',
    description: 'Solar Boost',
    contractStartDate: 1533859200000,
    contractEndDate: 1565308800000,
    nextMeterReadDate: 1556236800000,
    discountPercentage: 10,
    tacticalDiscountPercentage: 6,
    potDiscountPercentage: 0,
    discountType: 'USAGE_ONLY',
    greenPercentage: '1.00',
    billDeliveryMethodID: 'LET',
    productChangeAllowed: true,
    isPredictableProduct: false,
    solarBoostTariff: '0.15',
    status: 'In Progress',
    paymentInfo: {
      paymentMethodId: 'D',
      bankAccountId: '0001',
      paymentCardId: ''
    },
    discountText:
      '34% + 21% bonus discount when you sign up electricity and natural gas together',
    totalCost: 68.03,
    houseSize: '0',
    productId: null,
    campaignId: 'C-00036387',
    title: 'Bill Saver',
    tagLine: null,
    bonusOffer: null,
    dualFuelBonusOffer: null,
    benefitPeriod: null,
    exitFees: null,
    accountManagement: null,
    termsAndConditions: null,
    termsAndConditionsUrl: null,
    displayColour: 'blue',
    chargesDiscountCopy: null,
    tariff: [
      {
        categoryId: 'GRV-DOM',
        description: 'Domestic General',
        serviceProviderId: 'TXUN',
        serviceProviderName: 'SP AUSNET',
        timeOfUsage: '',
        rates: [
          {
            description: 'Peak Usage',
            band: '1',
            startValue: '0',
            endValue: '18250',
            includingGst: 2.30769,
            excludingGst: 2.0979,
            discountIncludingGst: 2.30769,
            discountExcludingGst: 2.0979,
            uomid: 'MJ'
          },
          {
            description: 'Peak Usage',
            band: '2',
            startValue: '18250',
            endValue: '9999999999',
            includingGst: 1.81313,
            excludingGst: 1.6483,
            discountIncludingGst: 1.81313,
            discountExcludingGst: 1.6483,
            uomid: 'MJ'
          },
          {
            description: 'Off Peak Usage',
            band: '3',
            startValue: '0',
            endValue: '18250',
            includingGst: 1.6489,
            excludingGst: 1.499,
            discountIncludingGst: 1.6489,
            discountExcludingGst: 1.499,
            uomid: 'MJ'
          },
          {
            description: 'Off Peak Usage',
            band: '4',
            startValue: '18250',
            endValue: '9999999999',
            includingGst: 1.31868,
            excludingGst: 1.1988,
            discountIncludingGst: 1.31868,
            discountExcludingGst: 1.1988,
            uomid: 'MJ'
          },
          {
            description: 'Daily Supply Charge',
            band: '0',
            startValue: '0',
            endValue: '0',
            includingGst: 85.8,
            excludingGst: 78,
            discountIncludingGst: 85.8,
            discountExcludingGst: 78,
            uomid: 'day'
          }
        ]
      }
    ],
    energyCost: {
      low: {
        '0': {
          approxCharge: 755.07,
          extraCost: '0 c/MJ',
          extraUnit: '',
          estimatedCharge: '22000 MJ / yearly'
        },
        '100': {
          approxCharge: 807.07,
          extraCost: '$1 per week',
          extraUnit: '',
          estimatedCharge: '22000 MJ / yearly'
        }
      },
      medium: {
        '0': {
          approxCharge: 755.07,
          extraCost: '0 c/MJ',
          extraUnit: '',
          estimatedCharge: '22000 MJ / yearly'
        },
        '100': {
          approxCharge: 807.07,
          extraCost: '$1 per week',
          extraUnit: '',
          estimatedCharge: '22000 MJ / yearly',
          refRule: '',
          refPercentSaving: 32.9,
          refTariffType: '',
          refType: 'Usage and Supply'
        }
      },
      high: {
        '0': {
          approxCharge: 755.07,
          extraCost: '0 c/MJ',
          extraUnit: '',
          estimatedCharge: '22000 MJ / yearly'
        },
        '100': {
          approxCharge: 807.07,
          extraCost: '$1 per week',
          extraUnit: '',
          estimatedCharge: '22000 MJ / yearly'
        }
      }
    },
    primaryDisplayFeatures: [
      {
        title: 'Flexible payment options',
        description:
          '<p>Choose from a range of payment options available to best meet your needs.<br>\\n</p>\\n',
        icon: 'direct-debit'
      },
      {
        title: 'eBilling and eCorrespondence available',
        description:
          '<p>Choose how you\'d like to receive your bills and correspondence from us.<br>\\n</p>\\n',
        icon: 'padlock'
      }
    ],
    secondaryDisplayFeatures: [
      {
        title: 'No exit fees or lock-in contracts',
        description:
          '<p>No exit fee or lock-in contract will apply to you if you leave this plan before the benefit period ends.<br>\\n</p>\\n',
        icon: 'cold'
      },
      {
        title: 'Benefit period',
        description:
          '<p>Your plan&#39;s discount will apply for 12 or 24 months from the supply start date.<br>\\n\\n\\n</p>\\n<p>\\n</p>\\n<p>\\n</p>\\n<p>\\n</p>\\n',
        icon: 'calendar'
      },
      {
        title: '24/7 Online account management',
        description:
          '<p>You can manage your account and check your usage online 24/7 using My Account.<br>\\n</p>\\n',
        icon: 'house-sans-circle'
      },
      {
        title: 'Frequently asked questions',
        description: `<p><b>How is this plan different from the others?<br>\\n</b>With Origin Saver, we reward you with pay-on-time discounts when you pay your bills by the due date.</p>\\n<p><b>What are the payment options available to me?<br>\\n</b>Simply pay your bills the way you want - by direct debit with your chosen credit/debit card or bank account or manually. You can also choose to receive your bills and correspondence by emails or post.</p>\\n<p><b>What about my concessions/rebates?<br>\\n</b>The approximate monthly charges you see above don't include any concessions or rebates that may apply to you. See&nbsp;<a href=\\'https://www.originenergy.com.au/for-home/electricity-and-gas/pricing/concessions-rebates.html\\">Concessions and rebates</a>&nbsp;to check whether you're eligible for a state-government concession or rebate.</p>\\n<p><b>What if I change my mind after I sign up to this plan?<br>\\n</b>No problem. We don't have lock-in contracts on our residential plans, so you can exit any time before the benefit period finishes without paying any exit fees.</p>\\n<p><b>Should I look at rates or discounts when I switch energy providers?<br>\\n</b>Big upfront discounts don't always mean big savings. Compare Origin's competitive rates with your current provider to see what you could save.</p>\\n`,
        icon: 'question'
      },
      {
        title: 'Salesform - Pricing special offer copy',
        description: 'No exit fees or lock-in contracts',
        icon: 'cold'
      }
    ],
    isDirectDebitMandatory: true,
    isEmailBillingMandatory: false,
    isEmailCorrespondenceMandatory: false,
    priceAttributes: [
      {
        contractId: '1001419090',
        priceType: 'CONCESSION',
        sequenceNo: '1',
        description: 'Pensioners Concession Card',
        price: '0.78082200',
        unitOfMeasure: 'c/day',
        blockFrom: '0',
        blockTo: '0'
      },
      {
        contractId: '1001419090',
        priceType: 'CONCESSION',
        sequenceNo: '1',
        description: 'DVA Gold Card',
        price: '0.17500000',
        unitOfMeasure: '%',
        blockFrom: '0',
        blockTo: '0'
      },
      {
        contractId: '1001419090',
        priceType: 'SOLARFIT',
        sequenceNo: '2',
        description: 'Solar FIT',
        price: '0.15000000',
        unitOfMeasure: 'c/kWh',
        blockFrom: '0',
        blockTo: '0'
      }
    ]
  }
];