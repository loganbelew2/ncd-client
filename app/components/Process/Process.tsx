import styles from './Process.module.css'
import Image from 'next/image'
export default function Process() {
    return (
        <section className={styles.processContainer}>
            <h2>How It Works</h2>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <Image
                        width={150}
                        height={150}
                        src={'/images/booking.png'}
                        alt='booking icon'
                    ></Image>
                    <p className={styles.stepHeader}>step 1</p>
                    <p>Book one of our 3 services <br /> online or call us</p>
                </div>
                <div className={styles.step}>
                    <Image
                        width={150}
                        height={150}
                        src={'/images/car.png'}
                        alt='car icon'
                    ></Image>
                    <p className={styles.stepHeader}>step 2</p>
                    <p>We come to you </p>
                </div>
                <div className={styles.step}>
                    <Image
                        width={150}
                        height={150}
                        src={'/images/key.png'}
                        alt='car key icon'
                    ></Image>
                    <p className={styles.stepHeader}>step 3</p>
                    <p>You hand us the keys <br /> and we get started <br /></p>
                </div>
                <div className={styles.step}>
                    <Image
                        width={150}
                        height={150}
                        src={'/images/checklist.png'}
                        alt='checklist icon'
                    ></Image>
                    <p className={styles.stepHeader}>step 4</p>
                    <p>After we finish the detail <br /> we ensure satisfaction <br /></p>
                </div>
            </div>
        </section>
    )
}