import React from "react";

const AllPosts = () => {
  return (
    <div className="container mt-[350px]">
      <div className="text-center text-white font-bold text-5xl mb-9"> Latest Posts</div>
      <div className="grid grid-cols-4 ml-9">
        <div class="isolate aspect-video w-80 rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-3">
          <h1 className="text-xl">Namith Tanwar</h1>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          accusamus distinctio modi provident hic quia maiores at dolor suscipit
          molestias.
        </div>

         <div class="isolate aspect-video w-80 rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-3">
          <h1 className="text-xl">Mukul</h1>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          accusamus distinctio modi provident hic quia maiores at dolor suscipit
          molestias.
        </div>
          <div class="isolate aspect-video w-80 rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-3">
          <h1 className="text-xl">Parag</h1>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          accusamus distinctio modi provident hic quia maiores at dolor suscipit
          molestias.
        </div>
          <div class="isolate aspect-video w-80 rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-3">
          <h1 className="text-xl">Maulik</h1>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          accusamus distinctio modi provident hic quia maiores at dolor suscipit
          molestias.
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
