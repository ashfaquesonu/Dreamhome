import Replicate from 'replicate';

export const aiRoute = async(req,res)=>{
    console.log(req.body)
  const image = req.body.image;
  const theme = req.body.selectedModel;
  const room = req.body.room;
  //console.log(image,theme,room)         

  // 2. Initialize the replicate object with our Replicate API token
  const replicate = new Replicate({
    auth: 'r8_aUhaVYZIcQaFL1hzpbdo7LmLuBpEb601xJOpN',
  });

  // // 3. Set the model that we're about to run
  const model =
    'jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b';

  // // 4. Set the image which is the image we uploaded from the client
  const input = {
    image,
    prompt: `A ${theme} ${room} Editorial Style Photo, Symmetry, Straight On, Modern Living Room, Large Window, Leather, Glass, Metal, Wood Paneling, Neutral Palette, Ikea, Natural Light, Apartment, Afternoon, Serene, Contemporary, 4k`,
    a_prompt: `best quality, extremely detailed, photo from Pinterest, interior, cinematic photo, ultra-detailed, ultra-realistic, award-winning`,
  };

  // // 5. Run the Replicate's model (to remove background) and get the output image
   const output = await replicate.run(model, { input });

  // // 6. Check if the output is NULL then return error back to the client
  if (!output) {
    console.log('Something went wrong');
   res.status(404).json({message:"not image is generated"})
    
  }
print(output);
  // 7. Otherwise, we show output in the console (server-side)
  //  and return the output back to the client
  console.log('Output', output);
  res.status(200).json(output[1])
}