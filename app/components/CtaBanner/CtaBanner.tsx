
import PrimaryButton from "../Buttons/Primary-Button"
import styles from "./CtaBanner.module.css"
export default function CtaBanner() {

    return (
        <div className={styles.BannerWrapper}>
            <h3>Schedule a Detail | 615-927-1987 </h3>
            <PrimaryButton/>
        </div>
    )
}