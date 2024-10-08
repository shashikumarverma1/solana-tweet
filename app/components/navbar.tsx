import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";

const NavBar = (props: any) => {
  const loggedIn = props.loggedIn || false;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon ">qoq</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link href="/">
              <button className="btn btn-sm navbar-brand text-res-500">
                Twitter on Solana
              </button>
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link href="/myTweets">
                  <button
                    className="btn btn-sm navbar-brand text-blue"
                    disabled={!loggedIn}
                  >
                    My Tweets
                  </button>
                </Link>
              </li>
            </ul>
            {/* <WalletMultiButton /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
