import PriceOption from "../priceOption/PriceOption";

const priceOptions=[
    {
      "id": "GYM101",
      "name": "FitLife Fitness Club",
      "price": 45,
      "features": [
        "Access to cardio and weightlifting equipment",
        "Group classes",
        "Locker rooms",
        "Free Wi-Fi"
      ]
    },
    {
      "id": "GYM102",
      "name": "Elite Performance",
      "price": 85,
      "features": [
        "All-day access",
        "Personal training sessions (5 per month)",
        "Sauna",
        "Unlimited group classes",
        "Nutrition guidance"
      ]
    },
    {
      "id": "GYM103",
      "name": "Budget Gym",
      "price": 25,
      "features": [
        "Basic equipment access",
        "No-frills environment",
        "Pay-per-use classes"
      ]
    },
    {
      "id": "GYM104",
      "name": "Premium Health Hub",
      "price": 120,
      "features": [
        "24/7 access",
        "Spa and massage services",
        "Personal trainer (8 sessions/month)",
        "Meal plans",
        "Exclusive fitness workshops"
      ]
    },
    {
      "id": "GYM105",
      "name": "Family Fitness Zone",
      "price": 60,
      "features": [
        "Family-friendly",
        "Kids' play area",
        "Group classes",
        "Swimming pool",
        "Cardio and strength machines"
      ]
    },
    {
      "id": "GYM106",
      "name": "Anytime Active",
      "price": 50,
      "features": [
        "24/7 access",
        "Cardio and strength training zones",
        "Mobile app support",
        "Guest passes"
      ]
    },
    {
      "id": "GYM107",
      "name": "Urban Fit Studio",
      "price": 65,
      "features": [
        "Boutique gym",
        "Yoga",
        "Pilates",
        "Spin classes",
        "Healthy snack bar"
      ]
    },
    {
      "id": "GYM108",
      "name": "Powerhouse Gym",
      "price": 70,
      "features": [
        "Hardcore strength training equipment",
        "Free supplements (limited)",
        "Advanced machines",
        "Strength workshops"
      ]
    }
  ]
  

const PriceOptions = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)}
        </div>
    );
};

export default PriceOptions;