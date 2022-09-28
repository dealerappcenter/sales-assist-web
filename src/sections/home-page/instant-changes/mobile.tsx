interface ColumnProps {
  amount: string;
  title: string;
  content: string;
}

const Column: React.FC<ColumnProps> = ({ amount, title, content }) => {
  return (
    <div className='flex gap-4'>
      <div className='w-[92px] text-[28px] font-semibold text-orange-normal leading-[34px]'>
        { amount }
      </div>
      <div>
        <h3 className='text-xl leading-[24px]'>{ title }</h3>
        <span className='text-xl leading-[24px] text-gray-subtext'>{ content }</span>
      </div>
    </div>
  )
}

const InstantChangesMobile: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-6'>
      <Column amount='+23%' title='Closing Rate' content='by completing sales faster' />
      <Column amount='15hrs+' title='Saved Per Person/Mo' content='to do more value-added work' />
      <Column amount='+15%' title='Positive reviews' content='by streamlining the sales compltion process' />
    </div>
  )
}

export default InstantChangesMobile;