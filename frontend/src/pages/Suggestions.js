import {
  Categories,
  EmptyList,
  OverviewRoadmap,
  SuggestionsList,
  Logo,
  Navbar,
  Sidebar,
  SuggestionsHeader,
} from '../components';

function Suggestions() {
  return (
    <div className="main_container min-h-screen laptop:flex laptop:justify-center laptop:pt-14 tablet:pb-14 desktop:pb-32  ">
      {/* --------- Header ----------- */}

      <div className="header_container tablet:px-10 tablet:pt-14 tablet:flex tablet:items-center tablet:justify-center tablet:mb-10 laptop:pt-0 laptop:px-0 laptop:items-start">
        <header className="tablet:flex tablet:gap-x-10 laptop:flex-col laptop:gap-y-6">
          <Navbar />
          <Logo />
          <article className="hidden tablet:block">
            <Categories />
          </article>
          <article className="hidden tablet:block">
            <OverviewRoadmap />
          </article>
        </header>
      </div>

      {/* --------- Sidebar ----------- */}

      <Sidebar />

      {/* --------- Content ----------- */}

      <main className="main_content tablet:px-10 laptop:px-0">
        <SuggestionsHeader />
        <div className="suggestion_list_container px-6 mt-8 flex items-center justify-center ">
          <SuggestionsList />
        </div>
      </main>
    </div>
  );
}

export default Suggestions;
