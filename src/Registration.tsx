import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Registration = () => {
  const router = useRouter();
  const [price, setPrice] = useState(999);
  const [coupon, setCoupon] = useState("");
  const [isScholarship, setIsScholarship] = useState(false);
  const [fakeCounter, setFakeCounter] = useState(9874);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [leaderboard, setLeaderboard] = useState(["Alice", "Bob", "Charlie"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFakeCounter((prev) => (prev > 9800 ? prev - Math.floor(Math.random() * 5) : 9800));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleApplyCoupon = () => {
    if (coupon === "SCHOLAR100") {
      setIsScholarship(true);
      setPrice(0);
    } else {
      alert("Invalid Coupon Code");
    }
  };

  const handleRegister = () => {
    if (isScholarship || price === 0) {
      setLeaderboard([...leaderboard, "You"]);
      router.push("/success");
    } else {
      setPaymentFailed(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <Card className="p-6 w-96 bg-white shadow-lg rounded-xl">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Register for the Course</h2>
          <p className="text-gray-500 mb-2 line-through">Original Price: ₹1,499</p>
          <p className="text-gray-700 mb-2 font-semibold">Limited-Time Offer: ₹{price}</p>
          <p className="text-green-600 mb-2">Discount for Active Developers: ₹500</p>
          <Input 
            type="text" 
            placeholder="Enter Coupon Code" 
            value={coupon} 
            onChange={(e) => setCoupon(e.target.value)} 
            className="mb-2"
          />
          <Button onClick={handleApplyCoupon} className="mb-4">Apply</Button>
          {isScholarship && <p className="text-green-600">Congratulations! Your coupon code has been applied successfully. You are now eligible for free registration!</p>}
          {paymentFailed && <p className="text-red-500">Server Busy! Too many registrations at the moment. Please try again later.</p>}
          <Button onClick={handleRegister} className="w-full mt-4">Register Now</Button>
        </CardContent>
      </Card>
      <div className="mt-6 p-4 bg-gray-200 rounded-xl w-80 text-center">
        <h3 className="font-bold">Leaderboard</h3>
        {leaderboard.map((name, index) => (
          <p key={index}>{index + 1}. {name}</p>
        ))}
      </div>
    </div>
  );
};

export default Registration;
