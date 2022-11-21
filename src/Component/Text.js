
const Text = ({...data}) => {

// console.log(data.char);


    return (
        <>
            <div className="main" >
                <div className="select">
                    <select name="Edit" value={data.edit} onChange={data.HandleEdit}>
                        <option className='option' value="Edit">Edit</option>
                        <option className='option' value="no Edit">No Edit</option>
                    </select>


                    <select name="Color" value={data.color} onChange={data.HandleColor}>
                        <option value="Black">Black</option>
                        <option value="Green">Green</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>

                    </select>
                    <select name="Char" value={data.char} onChange={data.HandleChar}>
                        <option value="12">12</option>
                        <option value="11">11</option>
                        <option value="5">5</option>
                        <option value="8">8</option>

                    </select>
                    <select name="Space" value={data.space} onChange={data.HandleSpace}>
                        <option value="Monospace">MonoSpace</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>

                    </select>
                </div>
                <div className="para" style={{ color: `${data.color}`, fontSize: `${data.char}px`, letterSpacing: `${data.space}px` }}>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, praesentium facere quod omnis vel est qui a totam ex voluptatem aspernatur! Quo corrupti, laboriosam similique adipisci suscipit sapiente laborum. Numquam!
                        Voluptates laudantium veritatis quis molestiae. Labore, quisquam id. Iusto quidem odio voluptas dignissimos labore, voluptate aliquam asperiores nulla? Iure nisi assumenda modi obcaecati eligendi voluptatibus corrupti ipsam nam reiciendis quia.
                        Consequuntur ut adipisci rem cupiditate modi quisquam suscipit commodi. Voluptas consequuntur doloremque earum harum dicta saepe temporibus minima cum odio cupiditate consectetur officiis obcaecati consequatur, voluptates quam! Nulla, dolores ab!
                        Porro commodi iure quos unde nihil esse eos tenetur magni similique at expedita quas perspiciatis, ut quae, ipsa fuga mollitia nam ab suscipit sint cupiditate, nesciunt odit placeat id? Odio.
                        Nostrum cupiditate cum hic possimus veritatis omnis quisquam blanditiis impedit tempore rerum, illo explicabo sed deserunt ex exercitationem ipsum beatae eveniet, saepe aliquam sapiente doloremque quaerat maxime deleniti! Dicta, recusandae?
                        Facere corporis sint distinctio tempore assumenda accusamus impedit velit dolor quos inventore neque esse minus eos dolorem, minima beatae veritatis. Culpa ex itaque quam ipsum nihil quasi, magni a expedita!
                        Recusandae illo nam voluptatem qui cum ipsa. Consequatur ullam porro ratione exercitationem consequuntur illo ducimus repudiandae eligendi commodi perferendis? Quis repudiandae id sit? Aliquam ipsum sint pariatur odio excepturi voluptas?
                        Delectus alias officia consequatur repellat nihil beatae quos quisquam perferendis voluptates esse magnam provident reprehenderit architecto mollitia, est blanditiis vel placeat exercitationem odit aliquam eveniet laudantium ullam? Quibusdam, enim soluta!
                        Placeat, laboriosam iure dignissimos sed eveniet repellat ut omnis quae veritatis id assumenda fugiat, vero molestiae mollitia quasi adipisci architecto deleniti expedita alias nisi odio autem! Nostrum perferendis blanditiis quidem?
                        Quod eius blanditiis cupiditate. Esse temporibus autem tenetur, cumque, ex neque doloribus cupiditate earum excepturi iure harum placeat dolore ipsam officiis! Obcaecati expedita, cupiditate commodi quisquam id minima. Nesciunt, cupiditate?
                        laborum. Numquam!
                        Voluptates laudantium veritatis quis molestiae. Labore, quisquam id. Iusto quidem odio voluptas dignissimos labore, voluptate aliquam asperiores nulla? Iure nisi assumenda modi obcaecati eligendi voluptatibus corrupti ipsam nam reiciendis quia.
                        Consequuntur ut adipisci rem cupiditate modi quisquam suscipit commodi. Voluptas consequuntur doloremque earum harum dicta saepe temporibus minima cum odio cupiditate consectetur officiis obcaecati consequatur, voluptates quam! Nulla, dolores ab!
                        Porro commodi iure quos unde nihil esse eos tenetur magni similique at expedita quas perspiciatis, ut quae, ipsa fuga mollitia nam ab suscipit sint cupiditate, nesciunt odit placeat id? Odio.
                        Nostrum cupiditate cum hic possimus veritatis omnis quisquam blanditiis impedit tempore rerum, illo explicabo sed deserunt ex exercitationem ipsum beatae eveniet, saepe aliquam sapiente doloremque quaerat maxime deleniti! Dicta, recusandae?
                        Facere corporis sint distinctio tempore assumenda accusamus impedit velit dolor quos inventore neque esse minus eos dolorem, minima beatae veritatis. Culpa ex itaque quam ipsum nihil quasi, magni a expedita!
                        Recusandae illo nam voluptatem qui cum ipsa. Consequatur ullam porro ratione exercitationem consequuntur illo ducimus repudiandae eligendi commodi perferendis? Quis repudiandae id sit? Aliquam ipsum sint pariatur odio excepturi voluptas?
                        Delectus alias officia consequatur repellat nihil beatae quos quisquam perferendis voluptates esse magnam provident reprehenderit architecto mollitia, est blanditiis vel placeat exercitationem odit aliquam eveniet laudantium ullam? Quibusdam, enim soluta!
                        Placeat, laboriosam iure dignissimos sed eveniet repellat ut omnis quae veritatis id assumenda fugiat, vero molestiae mollitia quasi adipisci architecto deleniti expedita alias nisi odio autem! Nostrum perferendis blanditiis quidem?
                        Quod eius blanditiis cupiditate. Esse temporibus autem tenetur, cumque, ex neque doloribus cupiditate earum excepturi iure harum placeat dolore ipsam officiis! Obcaecati expedita, cupiditate commodi quisquam id minima. Nesciunt, cupiditate?
                    </p>
                </div>


            </div>
        </>
    )
}

export default Text
