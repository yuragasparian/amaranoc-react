import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import CardItem from "./CardItem";
import { query, collection, where, getDocs, limit } from "firebase/firestore";
import database from "../../config/firebase";
import { regions } from './../../data/Regions';

function BestOffers() {
  const [searchParams] = useSearchParams();

  const section = searchParams.get("section");
  const regionIds = searchParams.getAll("region_id");

  console.log("ok");
  

  const addresses = regions
    .filter(reg => regionIds.includes(String(reg.id)))
    .map(reg => reg.name);

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const propertiesRef = collection(database, "properties");

        let q = query(propertiesRef, where("section", "==", section), limit(9));

        if (addresses.length > 0) {
          q = query(propertiesRef, where("section", "==", section), where("region_id", "in", addresses), limit(9));
        }

        const querySnapshot = await getDocs(q);

        const fetchedProperties = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProperties(fetchedProperties);
      } catch (error) {
        console.error("Error fetching properties: ", error);
      }
    };

    fetchProperties();
  }, [section, addresses]);

  return (
    <>
      <h2 className="text-lg font-bold">Best offers</h2>
      <div className="grid grid-cols-3 gap-6">
        {properties.map((offer) => (
          <CardItem offer={offer} key={offer.id} />
        ))}
      </div>
    </>
  );
}

export default BestOffers;
