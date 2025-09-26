'use client';
import Card from "@/components/common/Card";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
export default function About() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleSubmit = (title: string, content: string) => {
        console.log("Title:", title);
        console.log("Content:", content);
        setShowModal(false);
    }
  return (
    <div>
        {showModal && <PostModal onClose={handleCloseModal} onSubmit={handleSubmit}/>}
      <h1>Home page</h1>
        <Card title="Card Title" content="This is a sample card content." />
        <Card title="Another Card" content="More content in another card." />

        <button onClick={()=> setShowModal(true)}>Add content</button>
    </div>
  );
}