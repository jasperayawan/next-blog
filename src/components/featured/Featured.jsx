import Image from "next/image"
import styles from "./featured.module.css"

export default function Featured(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Jasper dev here!</b> Discover our stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis 
                        sequi corporis quibusdam libero laudantium deserunt perferendis, cupiditate 
                        adipisci assumenda repudiandae.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}